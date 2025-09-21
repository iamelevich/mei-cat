import { describe, expect, it } from "bun:test";
import { MeiCatGrabber } from "../src/services/meiCatGrabber";

describe("MeiCatGrabber", () => {
	it("should fetch XML URLs from MEI Cat with small page size and return absolute URLs", async () => {
		const url = "https://www.kb.dk/dcm/schw/index.xq";
		const options = {
			timeout: 10000,
			itemsPerPage: 3,
		};

		const result = await MeiCatGrabber.fromUrl(url, options);

		// Verify result structure
		expect(result).toHaveProperty("xmlUrls");
		expect(result).toHaveProperty("statistics");
		expect(Array.isArray(result.xmlUrls)).toBe(true);
		expect(typeof result.statistics).toBe("object");

		// Verify statistics structure
		expect(result.statistics).toHaveProperty("totalDocumentPaths");
		expect(result.statistics).toHaveProperty("successfulFetches");
		expect(result.statistics).toHaveProperty("failedFetches");
		expect(result.statistics).toHaveProperty("xmlUrlsFound");
		expect(result.statistics).toHaveProperty("xmlUrlsNotFound");
		expect(result.statistics).toHaveProperty("errors");
		expect(Array.isArray(result.statistics.errors)).toBe(true);

		// Verify statistics values are numbers
		expect(typeof result.statistics.totalDocumentPaths).toBe("number");
		expect(typeof result.statistics.successfulFetches).toBe("number");
		expect(typeof result.statistics.failedFetches).toBe("number");
		expect(typeof result.statistics.xmlUrlsFound).toBe("number");
		expect(typeof result.statistics.xmlUrlsNotFound).toBe("number");

		// With itemsPerPage: 3, we should have at most 3 document paths
		expect(result.statistics.totalDocumentPaths).toBeLessThanOrEqual(3);

		// Verify XML URLs are absolute URLs (start with http:// or https://)
		for (const xmlUrl of result.xmlUrls) {
			expect(xmlUrl).toMatch(/^https?:\/\//);
			expect(xmlUrl).toContain("download_xml.xq");
		}

		// Log results for debugging
		console.log("Test Results:");
		console.log(
			`Total document paths: ${result.statistics.totalDocumentPaths}`,
		);
		console.log(`Successful fetches: ${result.statistics.successfulFetches}`);
		console.log(`Failed fetches: ${result.statistics.failedFetches}`);
		console.log(`XML URLs found: ${result.statistics.xmlUrlsFound}`);
		console.log(`XML URLs not found: ${result.statistics.xmlUrlsNotFound}`);
		console.log(`XML URLs:`, result.xmlUrls);

		if (result.statistics.errors.length > 0) {
			console.log("Errors:", result.statistics.errors);
		}
	}, 30000); // 30 second timeout for network requests

	it("should validate URL format", async () => {
		const invalidUrl = "not-a-valid-url";
		const options = { timeout: 5000, itemsPerPage: 3 };

		await expect(MeiCatGrabber.fromUrl(invalidUrl, options)).rejects.toThrow(
			"Invalid URL format",
		);
	});

	it("should validate URL ends with /index.xq", async () => {
		const invalidUrl = "https://www.kb.dk/dcm/schw/";
		const options = { timeout: 5000, itemsPerPage: 3 };

		await expect(MeiCatGrabber.fromUrl(invalidUrl, options)).rejects.toThrow(
			"URL must end with /index.xq",
		);
	});
});
