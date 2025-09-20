import { describe, expect, it } from "bun:test";
import { join } from "node:path";
import { treaty } from "@elysiajs/eden";
import { seed } from "drizzle-seed";
import { db } from "../db";
import { meiFiles } from "../db/schema";
import { env } from "../env";
import { meiRoutes } from "./mei";

const api = treaty(meiRoutes);

describe("meiFilesRoutes", () => {
	it("should be defined", () => {
		expect(meiRoutes).toBeDefined();
		expect(api).toBeDefined();
	});

	it("should get all mei files", async () => {
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

		expect(response.data?.length).toBeGreaterThanOrEqual(2);
	});

	it("should return 404 if the mei file does not exist", async () => {
		const response = await api
			.mei({
				id: "832992c8-6805-4379-5fea-7069e8e2e123",
			})
			.get();
		expect(response.status).toBe(404);
		expect(response.data).toBeNull();
	});

	it("should get a mei file by id", async () => {
		await seed(
			db,
			{
				meiFiles,
			},
			{
				count: 1,
			},
		).refine((funcs) => ({
			meiFiles: {
				columns: {
					id: funcs.valuesFromArray({
						values: ["832992c8-6805-4379-5fea-7069e8e2e123"],
					}),
				},
			},
		}));

		const response = await api
			.mei({
				id: "832992c8-6805-4379-5fea-7069e8e2e123",
			})
			.get();

		expect(response.data).toBeDefined();
		expect(response.status).toBe(200);
	});

	it("should create a mei file from a URL", async () => {
		const inputFilePath = join(
			__dirname,
			"..",
			"..",
			"test",
			"test-v4-valid.xml",
		);

		const response = await api.mei.post({
			url: Bun.pathToFileURL(inputFilePath).toString(),
		});

		expect(response.data).not.toBeNull();
		expect(response.status).toBe(200);

		expect(response.data).toEqual({
			id: expect.any(String),
			convertedFileName: "mei_idm139988010758416.mei51.xml",
			hash: "1ee1513faac4e760",
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
		const response = await api.mei.post({
			url: "invalid-url",
		});
		expect(response.status).toBe(422);
		expect(response.error).toBeDefined();
		expect(response.error?.value).toEqual(
			expect.objectContaining({
				type: "validation",
				message: "Expected string to match 'uri' format",
			}),
		);
	});

	it("should return 400 if cant download the mei file", async () => {
		const response = await api.mei.post({
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
		const response = await api.mei.post({
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
