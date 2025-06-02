import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { join } from "path";
import { meiXmlToJson } from "./meiToJSON";

const meiFiles = ["cnw0010.xml", "cnw0002.xml"];

const meiDir = join(__dirname, "../mei_files");

describe("meiXmlToJson", () => {
	for (const file of meiFiles) {
		test(`parses ${file} without throwing`, () => {
			const xml = readFileSync(join(meiDir, file), "utf-8");
			const result = meiXmlToJson(xml);
			expect(result).toHaveProperty("manifestations");
			expect(Array.isArray(result.manifestations)).toBe(true);
		});
	}

	test("parses cnw0010.xml and finds expected work title", () => {
		const xml = readFileSync(join(meiDir, "cnw0010.xml"), "utf-8");
		const result = meiXmlToJson(xml);
		// Check at least one manifestation has a title or label
		const hasTitle = result.manifestations.some((m) => m.title || m.label);
		expect(hasTitle).toBe(true);
	});

	test("parses cnw0002.xml and finds expected work title", () => {
		const xml = readFileSync(join(meiDir, "cnw0002.xml"), "utf-8");
		const result = meiXmlToJson(xml);
		// Check at least one manifestation has a title or label
		const hasTitle = result.manifestations.some((m) => m.title || m.label);
		expect(hasTitle).toBe(true);
	});
});
