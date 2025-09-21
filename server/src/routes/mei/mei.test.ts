import { afterEach, describe, expect, it } from "bun:test";
import { join } from "node:path";
import { treaty } from "@elysiajs/eden";
import { seed } from "drizzle-seed";
import { db } from "../../db";
import { meiFiles } from "../../db/schema";
import { env } from "../../env";
import { meiRoutes } from ".";

const api = treaty(meiRoutes);

describe("meiFilesRoutes", () => {
	afterEach(async () => {
		await db.delete(meiFiles);
	});

	it("should be defined", () => {
		expect(meiRoutes).toBeDefined();
		expect(api).toBeDefined();
	});

	it("should get all mei files with pagination", async () => {
		await seed(
			db,
			{
				meiFiles,
			},
			{
				count: 2,
			},
		);

		const response = await api.mei.get();

		expect(response.data).not.toBeNull();
		expect(response.status).toBe(200);

		// Check pagination structure
		expect(response.data).toHaveProperty("data");
		expect(response.data).toHaveProperty("pagination");
		expect(response.data?.data).toBeInstanceOf(Array);
		expect(response.data?.data.length).toBeGreaterThanOrEqual(2);

		// Check pagination metadata
		expect(response.data?.pagination).toEqual({
			page: 1,
			limit: 10,
			totalCount: 2,
			totalPages: 1,
			hasNextPage: false,
			hasPrevPage: false,
		});
	});

	it("should handle pagination parameters correctly", async () => {
		await seed(
			db,
			{
				meiFiles,
			},
			{
				count: 15,
			},
		);

		// Test first page with limit 5
		const response1 = await api.mei.get({
			query: { page: 1, limit: 5 },
		});

		expect(response1.data).not.toBeNull();
		expect(response1.status).toBe(200);
		expect(response1.data?.data.length).toBe(5);
		expect(response1.data?.pagination).toEqual({
			page: 1,
			limit: 5,
			totalCount: 15,
			totalPages: 3,
			hasNextPage: true,
			hasPrevPage: false,
		});

		// Test second page
		const response2 = await api.mei.get({
			query: { page: 2, limit: 5 },
		});

		expect(response2.data).not.toBeNull();
		expect(response2.status).toBe(200);
		expect(response2.data?.data.length).toBe(5);
		expect(response2.data?.pagination).toEqual({
			page: 2,
			limit: 5,
			totalCount: 15,
			totalPages: 3,
			hasNextPage: true,
			hasPrevPage: true,
		});

		// Test last page
		const response3 = await api.mei.get({
			query: { page: 3, limit: 5 },
		});

		expect(response3.data).not.toBeNull();
		expect(response3.status).toBe(200);
		expect(response3.data?.data.length).toBe(5);
		expect(response3.data?.pagination).toEqual({
			page: 3,
			limit: 5,
			totalCount: 15,
			totalPages: 3,
			hasNextPage: false,
			hasPrevPage: true,
		});
	});

	it("should handle invalid pagination parameters", async () => {
		// Test negative page
		const response1 = await api.mei.get({
			query: { page: -1, limit: 10 },
		});
		expect(response1.status).toBe(422);

		// Test zero limit
		const response2 = await api.mei.get({
			query: { page: 1, limit: 0 },
		});
		expect(response2.status).toBe(422);

		// Test limit exceeding maximum
		const response3 = await api.mei.get({
			query: { page: 1, limit: 101 },
		});
		expect(response3.status).toBe(422);
	});

	it("should create a mei file from a file", async () => {
		const inputFilePath = join(
			__dirname,
			"..",
			"..",
			"..",
			"test",
			"test-v4-valid.xml",
		);

		const fileBuffer = await Bun.file(inputFilePath).arrayBuffer();
		const fileBlob = new Blob([fileBuffer], { type: "application/xml" });
		const response = await api.mei.post({
			file: new File([fileBlob], "test-v4-valid.xml"),
		});

		expect(response.error).toBeNull();
		expect(response.data).not.toBeNull();
		expect(response.status).toBe(200);

		expect(response.data).toEqual({
			id: expect.any(String),
			convertedFileName: "mei_idm139988010758416.mei51.xml",
			hash: "7c436e2d3d2d7fe4",
			originalFileName: "mei_idm139988010758416.xml",
			originalMeiVersion: "4.0.1",
			storagePath: env.STORAGE_PATH,
			storageType: env.STORAGE_TYPE,
			createdAt: expect.any(Date),
			updatedAt: expect.any(Date),
		});

		const inputFile = Bun.file(inputFilePath);
		const outputFile = Bun.file(
			join(env.STORAGE_PATH, response.data?.originalFileName ?? ""),
		);
		expect(await outputFile.exists(), "Output file does not exist").toBe(true);
		expect(await inputFile.exists(), "Input file does not exist").toBe(true);

		// Read contents of input and output files
		const inputContent = await inputFile.text();
		const outputContent = await outputFile.text();

		// Compute hashes (using Bun's built-in hash function)
		const inputHash = Bun.hash(inputContent);
		const outputHash = Bun.hash(outputContent);

		// Check if the hashes are the same
		expect(inputHash).toBe(outputHash);
	});

	it("should create a mei file from a URL", async () => {
		const inputFilePath = join(
			__dirname,
			"..",
			"..",
			"..",
			"test",
			"test-v4-valid.xml",
		);

		const response = await api.mei.url.post({
			url: Bun.pathToFileURL(inputFilePath).toString(),
		});

		expect(response.error).toBeNull();
		expect(response.data).not.toBeNull();
		expect(response.status).toBe(200);

		expect(response.data).toEqual({
			id: expect.any(String),
			convertedFileName: "mei_idm139988010758416.mei51.xml",
			hash: "7c436e2d3d2d7fe4",
			originalFileName: "mei_idm139988010758416.xml",
			originalMeiVersion: "4.0.1",
			storagePath: env.STORAGE_PATH,
			storageType: env.STORAGE_TYPE,
			createdAt: expect.any(Date),
			updatedAt: expect.any(Date),
		});

		const inputFile = Bun.file(inputFilePath);
		const outputFile = Bun.file(
			join(env.STORAGE_PATH, response.data?.originalFileName ?? ""),
		);
		expect(await outputFile.exists(), "Output file does not exist").toBe(true);
		expect(await inputFile.exists(), "Input file does not exist").toBe(true);

		// Read contents of input and output files
		const inputContent = await inputFile.text();
		const outputContent = await outputFile.text();

		// Compute hashes (using Bun's built-in hash function)
		const inputHash = Bun.hash(inputContent);
		const outputHash = Bun.hash(outputContent);

		// Check if the hashes are the same
		expect(inputHash).toBe(outputHash);
	});

	it("should return 422 if the url is invalid", async () => {
		const response = await api.mei.url.post({
			url: "invalid-url",
		});
		expect(response.status).toBe(422);
		expect(response.error).toBeDefined();
		expect(response.error?.value).toEqual(
			expect.objectContaining({
				type: "validation",
			}),
		);
	});

	it("should return 400 if cant download the mei file", async () => {
		const response = await api.mei.url.post({
			url: "https://invalid-url.invalid",
		});
		expect(response.error?.value).toEqual({
			error: "Failed to download MEI file",
			cause: {
				code: "ConnectionRefused",
				errno: 0,
				path: "https://invalid-url.invalid/",
			},
		});
		expect(response.status).toBe(400);
	});

	it("should return 400 if the mei file is invalid", async () => {
		const response = await api.mei.url.post({
			url: Bun.pathToFileURL(
				join(__dirname, "..", "..", "test", "invalid-file.json"),
			).toString(),
		});
		expect(response.error?.value).toEqual({
			error: "Failed to process MEI file",
			cause: {
				name: "MeiFileInvalidContentTypeError",
				message:
					"Invalid content type. Expected application/xml, but got application/json;charset=utf-8",
			},
		});
		expect(response.status).toBe(500);
	});
});
