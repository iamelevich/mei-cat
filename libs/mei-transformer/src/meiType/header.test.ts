import { describe, it } from "bun:test";
import { expectType } from "ts-expect";
import type { TitleStmt } from "./header";

describe("MEI.header", () => {
	describe("<titleStmt>", () => {
		it("should parse a minimal titleStmt", () => {
			const titleStmt = {
				title: [
					"Example of a Minimal header",
					"Der Abendstern: an electronic transcription",
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
			};
			expectType<TitleStmt>(titleStmt);
		});

		it("should work for Bach-JS_Hilf_Herr_Jesu_BWV344", () => {
			const titleStmt = {
				title: [
					"Hilf, Herr Jesu, laß gelingen",
					{
						titlePart: {
							"#text": "an electronic transcription",
							"@type": "subordinate",
						},
						"#text": "BWV 344",
						"@type": "work",
					},
				],
				composer: {
					persName: {
						"#text": "Johann Sebastian Bach",
						"@cert": "low",
						"@role": "creator",
						"@codedval": "11850553X",
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
			};
			expectType<TitleStmt>(titleStmt);
		});

		it("should work for example of of a header including FRBR", () => {
			const titleStmt = {
				title: "Example of of a header including FRBR",
				composer: {
					persName: {
						"#text": "Robert Schumann",
						"@role": "creator",
						"@auth": "GND",
						"@auth.uri": "http://d-nb.info/gnd/",
						"@codedval": "118611666",
					},
				},
				respStmt: {
					persName: {
						"#text": "Kristina Richts",
						"@role": "encoder",
					},
				},
			};
			expectType<TitleStmt>(titleStmt);
		});
	});
});
