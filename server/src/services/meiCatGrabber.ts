import Elysia, { t } from "elysia";
import {
	APIError,
	APIFileDownloadError,
	APIValidationError,
} from "../shared/errors";

export type MeiCatGrabberFromURLOptions = {
	timeout: number;
	itemsPerPage?: number;
};

export type MeiCatGrabberResult = {
	xmlUrls: string[];
	statistics: {
		totalDocumentPaths: number;
		successfulFetches: number;
		failedFetches: number;
		xmlUrlsFound: number;
		xmlUrlsNotFound: number;
		errors: string[];
	};
};

export const MeiCatGrabberResultSchema = t.Object({
	xmlUrls: t.Array(
		t.String({
			format: "uri",
			description: "Absolute URL to download XML file",
		}),
	),
	statistics: t.Object({
		totalDocumentPaths: t.Number({
			description: "Total number of document paths found",
		}),
		successfulFetches: t.Number({
			description: "Number of successful document page fetches",
		}),
		failedFetches: t.Number({
			description: "Number of failed document page fetches",
		}),
		xmlUrlsFound: t.Number({
			description: "Number of XML download URLs found",
		}),
		xmlUrlsNotFound: t.Number({
			description: "Number of documents where no XML URL was found",
		}),
		errors: t.Array(
			t.String({
				description: "Error messages encountered during processing",
			}),
		),
	}),
});

export const meiCatGrabberService = new Elysia({
	name: "meiCatGrabberService",
}).decorate("meiCatGrabberService", {
	fromUrl: (
		url: string,
		options: MeiCatGrabberFromURLOptions = {
			timeout: 5000,
			itemsPerPage: 5000,
		},
	) => {
		return MeiCatGrabber.fromUrl(url, options);
	},
});

/**
 * A MEI Cat Grabber service for fetching MEI files from URLs.
 */
export class MeiCatGrabber {
	/**
	 * Create a MeiCatGrabber instance from a URL and fetch all XML URLs.
	 * @param url - The URL to fetch from.
	 * @param options - Options for the request.
	 * @param options.timeout - The timeout for the request in milliseconds.
	 * @returns MeiCatGrabberResult with XML URLs and statistics.
	 */
	static async fromUrl(
		url: string,
		options: MeiCatGrabberFromURLOptions,
	): Promise<MeiCatGrabberResult> {
		// Validate URL format
		try {
			new URL(url);
		} catch {
			throw new APIValidationError("Invalid URL format");
		}

		// Check that URL ends with /index.xq
		if (!url.endsWith("/index.xq")) {
			throw new APIValidationError("URL must end with /index.xq");
		}

		const meiCatGrabber = new MeiCatGrabber(url, options);
		const documentPaths = await meiCatGrabber.fetchDocumentPaths();
		const result = await meiCatGrabber.fetchXmlUrls(documentPaths);
		return result;
	}

	/**
	 * @param url - The URL to fetch from
	 * @param options - Options for the request
	 */
	constructor(
		private url: string,
		private options: MeiCatGrabberFromURLOptions,
	) {}

	/**
	 * Fetch MEI data from the URL and return document paths.
	 * @returns Array of document paths extracted from result tables.
	 */
	async fetchDocumentPaths(): Promise<string[]> {
		// Add itemsPerPage query parameter
		const urlObj = new URL(this.url);
		urlObj.searchParams.set(
			"itemsPerPage",
			String(this.options.itemsPerPage ?? 5000),
		);
		const finalUrl = urlObj.toString();

		try {
			// Fetch the HTML content
			const response = await fetch(finalUrl, {
				signal: AbortSignal.timeout(this.options.timeout),
			});

			if (!response.ok) {
				throw new APIFileDownloadError("Failed to fetch MEI Cat data");
			}

			const html = await response.text();

			// Parse HTML and extract paths from onclick attributes
			return this.extractDocumentPaths(html);
		} catch (error) {
			if (
				error instanceof Error &&
				(error.name === "AbortError" || error.name === "TimeoutError")
			) {
				throw new APIFileDownloadError("Request timed out");
			}
			if (error instanceof APIError) {
				throw error;
			}
			throw new APIFileDownloadError("Failed to fetch MEI Cat data", {
				cause: error,
			});
		}
	}

	/**
	 * Fetch XML URLs from document paths.
	 * @param documentPaths - Array of document paths to process.
	 * @returns MeiCatGrabberResult with XML URLs and statistics.
	 */
	async fetchXmlUrls(documentPaths: string[]): Promise<MeiCatGrabberResult> {
		const xmlUrls: string[] = [];
		const baseUrl = new URL(this.url);
		const errors: string[] = [];

		let successfulFetches = 0;
		let failedFetches = 0;
		let xmlUrlsFound = 0;
		let xmlUrlsNotFound = 0;

		for (const path of documentPaths) {
			try {
				// Construct full URL for the document
				// Remove /index.xq from the pathname and ensure it ends with /
				const basePath = baseUrl.pathname.replace("/index.xq", "");
				const baseUrlString =
					baseUrl.origin + basePath + (basePath.endsWith("/") ? "" : "/");
				const documentUrl = new URL(path, baseUrlString);

				// Fetch the document page
				const response = await fetch(documentUrl.toString(), {
					signal: AbortSignal.timeout(this.options.timeout),
				});

				if (!response.ok) {
					const errorMsg = `Failed to fetch document: ${documentUrl.toString()} (Status: ${response.status})`;
					errors.push(errorMsg);
					failedFetches++;
					continue;
				}

				successfulFetches++;
				const html = await response.text();
				const xmlUrl = this.extractXmlUrl(html, documentUrl.toString());

				if (xmlUrl) {
					xmlUrls.push(xmlUrl);
					xmlUrlsFound++;
				} else {
					xmlUrlsNotFound++;
					errors.push(
						`No XML URL found in document: ${documentUrl.toString()}`,
					);
				}
			} catch (error) {
				const errorMsg = `Error processing document path ${path}: ${error instanceof Error ? error.message : String(error)}`;
				errors.push(errorMsg);
				failedFetches++;
			}
		}

		return {
			xmlUrls,
			statistics: {
				totalDocumentPaths: documentPaths.length,
				successfulFetches,
				failedFetches,
				xmlUrlsFound,
				xmlUrlsNotFound,
				errors,
			},
		};
	}

	/**
	 * Extract document paths from HTML by finding table elements with class "result_table"
	 * and extracting the path from their onclick attributes.
	 * @param html - The HTML content to parse.
	 * @returns Array of document paths.
	 */
	private extractDocumentPaths(html: string): string[] {
		const paths: string[] = [];

		// Use regex to find all table elements with class "result_table" and extract onclick paths
		const tableRegex =
			/<table[^>]*class="[^"]*result_table[^"]*"[^>]*onclick="location\.href='([^']+)'"[^>]*>/g;

		let match: RegExpExecArray | null = tableRegex.exec(html);
		while (match !== null) {
			const path = match[1];
			if (path) {
				paths.push(path);
			}
			match = tableRegex.exec(html);
		}

		return paths;
	}

	/**
	 * Extract XML download URL from HTML by finding the download link in the tools section.
	 * @param html - The HTML content to parse.
	 * @param documentUrl - The URL of the document page (used to resolve relative URLs).
	 * @returns The absolute XML download URL or null if not found.
	 */
	private extractXmlUrl(html: string, documentUrl: string): string | null {
		// Look for the XML download link in the tools section
		// Try multiple patterns to be more flexible
		const patterns = [
			// Original pattern: href with download_xml.xq and title containing XML
			/<a[^>]*href="([^"]*download_xml\.xq[^"]*)"[^>]*title="[^"]*XML[^"]*"[^>]*>/i,
			// More flexible: just look for download_xml.xq in href
			/<a[^>]*href="([^"]*download_xml\.xq[^"]*)"[^>]*>/i,
			// Even more flexible: look for any link containing download_xml.xq
			/href="([^"]*download_xml\.xq[^"]*)"/i,
		];

		for (const pattern of patterns) {
			const match = html.match(pattern);
			if (match) {
				const relativeUrl = match[1];
				// Convert relative URL to absolute URL
				try {
					const absoluteUrl = new URL(relativeUrl, documentUrl);
					return absoluteUrl.toString();
				} catch (error) {
					console.warn(
						`Failed to convert relative URL to absolute: ${relativeUrl}`,
						error,
					);
					return relativeUrl; // Return as-is if conversion fails
				}
			}
		}

		// If no XML link found, log a snippet of the HTML for debugging
		const toolsSection = html.match(
			/<span[^>]*class="[^"]*tools[^"]*"[^>]*>[\s\S]*?<\/span>/i,
		);
		if (toolsSection) {
			console.log("Tools section found:", toolsSection[0].substring(0, 500));
		}

		return null;
	}
}
