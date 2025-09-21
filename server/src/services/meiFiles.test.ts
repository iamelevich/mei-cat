import { describe, expect, test } from "bun:test";
import { join } from "node:path";
import { db } from "../db";
import { env } from "../env";
import { MeiFile } from "./meiFiles";

describe("MeiFile", () => {
	test("should be defined", () => {
		expect(MeiFile).toBeDefined();
	});

	test("should correctly process the minimal header", async () => {
		const file = Bun.file(
			join(__dirname, "..", "..", "test", "Example_MinimalHeader.mei"),
		);
		const meiFile = await MeiFile.fromFile(file);
		expect(meiFile).toBeDefined();

		const json = await meiFile.json;
		expect(json).toBeDefined();

		const result = await meiFile.fillDB();

		expect(result).toBeDefined();
		expect(result.hash).toBe(meiFile.hash);
		expect(result.originalFileName).toBe(`${meiFile.id}.xml`);
		expect(result.convertedFileName).toBe(`${meiFile.id}.mei51.xml`);
		expect(result.originalMeiVersion).toBe("5.1");
		expect(result.storageType).toBe(env.STORAGE_TYPE);
		expect(result.storagePath).toBe(env.STORAGE_PATH);

		const fileInDB = await db.query.meiFiles.findFirst({
			where: (file, { eq }) => eq(file.id, result.id),
			with: {
				fileDesc: {
					with: {
						titleStmt: {
							with: {
								title: true,
								respStmt: true,
							},
						},
					},
				},
			},
		});
		expect(fileInDB).toBeDefined();
		expect(fileInDB?.fileDesc).toBeDefined();
		expect(fileInDB?.fileDesc?.titleStmt).toBeDefined();
		expect(fileInDB?.fileDesc?.titleStmt.title).toBeArrayOfSize(2);
		expect(fileInDB?.fileDesc?.titleStmt.respStmt).toBeArrayOfSize(2);
	});

	test("should handle batch delete with valid and invalid IDs", async () => {
		// Test batch delete with only invalid IDs first (using valid UUID format)
		const invalidIds = [
			"550e8400-e29b-41d4-a716-446655440001",
			"550e8400-e29b-41d4-a716-446655440002",
		];
		const batchResultsInvalid = await MeiFile.deleteBatch(invalidIds);

		expect(batchResultsInvalid.successCount).toBe(0);
		expect(batchResultsInvalid.errorCount).toBe(2);
		expect(batchResultsInvalid.errors).toHaveLength(2);
		expect(batchResultsInvalid.errors[0].error).toBe("MEI file not found");
		expect(batchResultsInvalid.errors[1].error).toBe("MEI file not found");

		// Test batch delete with empty array
		const emptyResults = await MeiFile.deleteBatch([]);
		expect(emptyResults.successCount).toBe(0);
		expect(emptyResults.errorCount).toBe(0);
		expect(emptyResults.errors).toHaveLength(0);
	});
});
