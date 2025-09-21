import { describe, expect, it } from "bun:test";
import { meiParseCatalogRoutes } from "../src/routes/mei/parse-catalog";

describe("MEI Parse Catalog Routes", () => {
	it("should parse MEI Cat catalog with valid URL", async () => {
		const app = meiParseCatalogRoutes;

		const response = await app.handle(
			new Request("http://localhost/parse-catalog", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					url: "https://www.kb.dk/dcm/schw/index.xq",
					timeout: 10000,
					itemsPerPage: 3,
				}),
			}),
		);

		expect(response.status).toBe(200);

		const result = await response.json();

		// Verify response structure matches MeiCatGrabberResultSchema
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

		// Verify XML URLs are absolute
		for (const xmlUrl of result.xmlUrls) {
			expect(xmlUrl).toMatch(/^https?:\/\//);
			expect(xmlUrl).toContain("download_xml.xq");
		}

		// With itemsPerPage: 3, we should have at most 3 document paths
		expect(result.statistics.totalDocumentPaths).toBeLessThanOrEqual(3);

		console.log("Parse Catalog Test Results:");
		console.log(
			`Total document paths: ${result.statistics.totalDocumentPaths}`,
		);
		console.log(`Successful fetches: ${result.statistics.successfulFetches}`);
		console.log(`Failed fetches: ${result.statistics.failedFetches}`);
		console.log(`XML URLs found: ${result.statistics.xmlUrlsFound}`);
		console.log(`XML URLs:`, result.xmlUrls);
	}, 30000);
});
