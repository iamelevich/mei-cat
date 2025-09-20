import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { TitleStmtSchema } from "./titleStmt";

describe("TitleStmtSchema", () => {
	it("should be defined", () => {
		expect(TitleStmtSchema).toBeDefined();
	});

	it("should be a valid schema", () => {
		const parseResult = v.parse(TitleStmtSchema, {
			title: {
				"#text": "Sketches",
				"@xml:id": "title_ccf1179c",
			},
			"@xml:id": "titleStmt_N203AC",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should be a valid schema with optional title", () => {
		const parseResult = v.parse(TitleStmtSchema, {
			"@xml:id": "titleStmt_N203AC",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should be valid with array of titles", () => {
		const parseResult = v.parse(TitleStmtSchema, {
			title: [
				{
					"#text": "Example of a Minimal header",
				},
				{
					"#text": "Der Abendstern: an electronic transcription",
				},
			],
			composer: {
				persName: {
					"#text": "Robert Schumann",
					"@role": "creator",
					"@codedval": "118611666",
					"@auth": "GND",
					"@auth.uri": "http://d-nb.info/gnd/",
				},
			},
			respStmt: {
				persName: {
					"#text": "John Doe",
					"@role": "encoder",
				},
			},
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should be valid with title part", () => {
		const parseResult = v.parse(TitleStmtSchema, {
			title: {
				titlePart: [
					{
						"#text": "BWV 1049",
						"@type": "subordinate",
					},
					{
						"#text": "an electronic transcription",
						"@type": "subordinate",
					},
				],
				"#text": "4. Brandenburgisches Konzert in G-Dur",
			},
			composer: {
				persName: {
					"#text": "Johann Sebastian Bach",
					"@role": "creator",
					"@codedval": "1180553X",
					"@auth.uri": "http://d-nb.info/gnd/",
					"@auth": "GND",
				},
			},
			respStmt: {
				persName: [
					{
						"#text": "Maja Hartwig",
						"@role": "encoder",
					},
					{
						"#text": "Kristina Richts",
						"@role": "encoder",
					},
				],
			},
		});

		expect(parseResult).toMatchSnapshot();
	});
});
