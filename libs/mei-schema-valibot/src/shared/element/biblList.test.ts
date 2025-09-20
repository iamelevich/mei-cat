import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { BiblListSchema } from "./biblList";

describe("BiblListSchema", () => {
	it("should be defined", () => {
		expect(BiblListSchema).toBeDefined();
	});

	it("should parse a biblList with head and single bibl", () => {
		const parseResult = v.parse(BiblListSchema, {
			head: {
				"#text": "Documents",
				"@xml:id": "head_N21061",
			},
			bibl: {
				genre: {
					"#text": "letter",
					"@xml:id": "genre_N21066",
				},
				author: {
					"#text": "Carl Nielsen",
					"@xml:id": "author_N21068",
				},
				"@xml:id": "bibl_d1e54725372",
			},
			"@xml:id": "biblList_N21060",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a biblList with multiple bibl elements", () => {
		const parseResult = v.parse(BiblListSchema, {
			head: {
				"#text": "Documents",
				"@xml:id": "head_N21061",
			},
			bibl: [
				{
					genre: {
						"#text": "letter",
						"@xml:id": "genre_N21066",
					},
					author: {
						"#text": "Carl Nielsen",
						"@xml:id": "author_N21068",
					},
					"@xml:id": "bibl_d1e54725372",
				},
				{
					genre: {
						"#text": "letter",
						"@xml:id": "genre_N2108D",
					},
					author: {
						"#text": "Carl Nielsen",
						"@xml:id": "author_N2108F",
					},
					"@xml:id": "bibl_d1e55295428",
				},
			],
			"@xml:id": "biblList_N21060",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a minimal biblList", () => {
		const parseResult = v.parse(BiblListSchema, {
			"@xml:id": "biblList_N21060",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a biblList with label", () => {
		const parseResult = v.parse(BiblListSchema, {
			label: {
				"#text": "Bibliography",
				"@xml:id": "label_N21061",
			},
			"@xml:id": "biblList_N21060",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse nested biblList structures", () => {
		const parseResult = v.parse(BiblListSchema, {
			head: {
				"#text": "Documents",
				"@xml:id": "head_N21061",
			},
			biblList: {
				head: {
					"#text": "Sub-documents",
					"@xml:id": "head_N21062",
				},
				bibl: {
					genre: {
						"#text": "letter",
						"@xml:id": "genre_N21066",
					},
					"@xml:id": "bibl_d1e54725372",
				},
				"@xml:id": "biblList_N21063",
			},
			"@xml:id": "biblList_N21060",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
