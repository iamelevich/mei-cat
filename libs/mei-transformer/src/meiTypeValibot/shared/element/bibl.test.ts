import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { BiblSchema } from "./bibl";

describe("BiblSchema", () => {
	it("should be defined", () => {
		expect(BiblSchema).toBeDefined();
	});

	it("should parse a bibl with genre and author", () => {
		const parseResult = v.parse(BiblSchema, {
			genre: {
				"#text": "letter",
				"@xml:id": "genre_N21066",
			},
			author: {
				"#text": "Carl Nielsen",
				"@xml:id": "author_N21068",
			},
			"@xml:id": "bibl_d1e54725372",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a bibl with recipient", () => {
		const parseResult = v.parse(BiblSchema, {
			recipient: {
				"#text": "Henrik Knudsen",
				"@xml:id": "recipient_N2106A",
			},
			"@xml:id": "bibl_d1e54725372",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a bibl with creation date", () => {
		const parseResult = v.parse(BiblSchema, {
			creation: {
				date: {
					"#text": "1904-02-02",
					"@isodate": "1904-02-02",
					"@xml:id": "date_N2106D",
				},
				"@xml:id": "creation_N2106C",
			},
			"@xml:id": "bibl_d1e54725372",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a minimal bibl", () => {
		const parseResult = v.parse(BiblSchema, {
			"@xml:id": "bibl_d1e54725372",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a bibl with biblScope", () => {
		const parseResult = v.parse(BiblSchema, {
			biblScope: {
				"#text": "II/325",
				"@xml:id": "biblScope_N2107F",
			},
			"@xml:id": "bibl_d1e54725372",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a bibl with title", () => {
		const parseResult = v.parse(BiblSchema, {
			title: {
				"#text": "CNB",
				"@xml:id": "title_N2107D",
			},
			"@xml:id": "bibl_d1e54725372",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a bibl with label attribute", () => {
		const parseResult = v.parse(BiblSchema, {
			"@label": "Primary source",
			"@xml:id": "bibl_d1e54725372",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a bible from cnw0002", () => {
		const bibl = [
			{
				genre: [
					{
						"#text": "article",
						"@xml:id": "genre_N24B68",
					},
					{
						"#text": "journal",
						"@xml:id": "genre_N24B6A",
					},
				],
				author: {
					"#text": "Hagen Hohlenberg",
					"@xml:id": "author_N24B6C",
				},
				title: [
					{
						"#text": 'Carl Nielsen: "Maskarade"',
						"@level": "a",
						"@xml:id": "title_N24B6E",
					},
					{
						"#text": "Tilskueren",
						"@level": "j",
						"@xml:id": "title_N24B71",
					},
				],
				biblScope: [
					{
						"#text": "23",
						"@unit": "vol",
						"@xml:id": "biblScope_N24B75",
					},
					{
						"#text": "1007–11",
						"@unit": "page",
						"@xml:id": "biblScope_N24B7A",
					},
				],
				imprint: {
					date: {
						"#text": "1906",
						"@isodate": "1906",
						"@xml:id": "date_N24B7E",
					},
					"@xml:id": "imprint_N24B7D",
				},
				"@label": "",
				"@xml:id": "bibl_782866b5",
			},
			{
				genre: {
					"#text": "letter",
					"@xml:id": "genre_N211DC",
				},
				author: {
					"#text": "Anne Marie Carl-Nielsen",
					"@xml:id": "author_N211DE",
				},
				recipient: {
					"#text": "Carl Nielsen",
					"@xml:id": "recipient_N211E0",
				},
				creation: {
					date: {
						"#text": "1905-01-22",
						"@isodate": "1905-01-22",
						"@xml:id": "date_N211E3",
					},
					"@xml:id": "creation_N211E2",
				},
				physLoc: {
					repository: {
						identifier: {
							"#text": "DK-Kk",
							"@auth.uri": "http://www.rism.info/",
							"@auth": "RISM",
							"@xml:id": "identifier_N211E8",
						},
						"@xml:id": "repository_N211E7",
					},
					identifier: {
						"#text": "CNA IAa1",
						"@xml:id": "identifier_N211EC",
					},
					"@xml:id": "physLoc_N211E6",
				},
				relatedItem: [
					{
						bibl: {
							title: {
								"#text": "CNB",
								"@xml:id": "title_N211F3",
							},
							biblScope: {
								"#text": "II/416",
								"@xml:id": "biblScope_N211F5",
							},
							"@label": "",
							"@xml:id": "bibl_d1e60635949",
						},
						"@rel": "host",
						"@xml:id": "relatedItem_N211EE",
					},
					{
						bibl: {
							title: {
								"#text": "T Sch",
								"@xml:id": "title_N211FC",
							},
							biblScope: {
								"#text": "200",
								"@xml:id": "biblScope_N211FE",
							},
							"@label": "",
							"@xml:id": "bibl_d1e60755961",
						},
						"@rel": "host",
						"@xml:id": "relatedItem_N211F7",
					},
				],
				"@label": "",
				"@xml:id": "bibl_d1e60295916",
			},
		];

		for (const b of bibl) {
			const parseResult = v.parse(BiblSchema, b);
			expect(parseResult).toMatchSnapshot();
		}
	});
});
