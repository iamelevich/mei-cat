import { describe, expect, test } from "bun:test";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import * as v from "valibot";
import { MeiJsonSchema } from "./meiJson";

describe("MeiJsonSchema", async () => {
	test("should be defined", () => {
		expect(MeiJsonSchema).toBeDefined();
	});

	const files = await readdir(join(__dirname, "..", "__testFiles__"));

	test.each(files)("should be a valid schema for %s", async (file) => {
		const fileContent = await readFile(
			join(__dirname, "..", "__testFiles__", file),
			"utf-8",
		);
		const json = JSON.parse(fileContent);
		const parseResult = v.safeParse(MeiJsonSchema, json);
		expect(parseResult.issues).toBeUndefined();

		expect(parseResult.output).toEqual(json);
	});
});
