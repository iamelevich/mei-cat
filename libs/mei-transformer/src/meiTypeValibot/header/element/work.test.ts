import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { WorkSchema } from "./work";

describe("WorkSchema", () => {
	it("should be defined", () => {
		expect(WorkSchema).toBeDefined();
	});

	it("should parse a complete work element from cnw0002.xml.json", () => {
		const parseResult = v.parse(WorkSchema, {
			identifier: [
				{
					"#text": "2",
					"@label": "CNW",
					"@xml:id": "identifier_N21022",
				},
				{
					"#text": "I/1–3",
					"@label": "CNU",
					"@xml:id": "identifier_N21025",
				},
				{
					"#text": "329",
					"@label": "CNS",
					"@xml:id": "identifier_N21028",
				},
				{
					"#text": "39",
					"@label": "FS",
					"@xml:id": "identifier_N2102B",
				},
			],
			title: [
				{
					"#text": "Maskarade",
					"@xml:id": "title_41c4ef82",
					"@xml:lang": "da",
				},
				{
					"#text": "Masquerade",
					"@xml:id": "title_80453ebe",
					"@xml:lang": "en",
				},
				{
					"#text": "Komisk opera i tre akter",
					"@type": "subordinate",
					"@xml:id": "title_a287c05d",
					"@xml:lang": "da",
				},
				{
					"#text": "Comic Opera in Three Acts",
					"@type": "subordinate",
					"@xml:id": "title_378abcba",
					"@xml:lang": "en",
				},
			],
			contributor: {
				persName: [
					{
						"#text": "Carl Nielsen",
						"@role": "composer",
						"@xml:id": "persName_469738c4",
					},
					{
						"#text": "Vilhelm Andersen",
						"@role": "author",
						"@xml:id": "persName_aac98b1a",
					},
				],
				"@xml:id": "respStmt_N21041",
			},
			creation: {
				date: {
					"#text": "1905–06",
					"@enddate": "1906",
					"@startdate": "1905",
					"@xml:id": "date_N2104E",
				},
				"@xml:id": "creation_46103232",
			},
			history: {
				p: {
					rend: {
						"#text": "Mascarade",
						"@xml:id": "idm1011",
						"@fontstyle": "italic",
					},
					"#text":
						"In the beginning of the 1890s, Carl Nielsen got the idea to base an opera on one of Ludvig Holberg's comedies. It was not until New Year 1903–04 that he began working out the structure of the opera based on Holberg's. The text by Vilhelm Andersen was finished in April 1904; Carl Nielsen did not, however, start composing the music until 1905. In October the work (with an unfinished Act Three) was handed in for evaluation, and in December 1905 it was accepted for performance at The Royal Theatre.",
					"@xml:id": "idm1010",
				},
				"@xml:id": "history_96698b6f",
			},
			langUsage: {
				language: [
					{
						"#text": "Danish",
						"@xml:id": "da",
					},
					{
						"#text": "English",
						"@xml:id": "en",
					},
				],
				"@xml:id": "langUsage_N21058",
			},
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a minimal work element", () => {
		const parseResult = v.parse(WorkSchema, {
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with only identifier", () => {
		const parseResult = v.parse(WorkSchema, {
			identifier: [
				{
					"#text": "2",
					"@label": "CNW",
					"@xml:id": "identifier_N21022",
				},
			],
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with only title", () => {
		const parseResult = v.parse(WorkSchema, {
			title: [
				{
					"#text": "Maskarade",
					"@xml:id": "title_41c4ef82",
					"@xml:lang": "da",
				},
			],
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with contributor information", () => {
		const parseResult = v.parse(WorkSchema, {
			contributor: {
				persName: [
					{
						"#text": "Carl Nielsen",
						"@role": "composer",
						"@xml:id": "persName_469738c4",
					},
					{
						"#text": "Vilhelm Andersen",
						"@role": "author",
						"@xml:id": "persName_aac98b1a",
					},
				],
				"@xml:id": "respStmt_N21041",
			},
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with creation date", () => {
		const parseResult = v.parse(WorkSchema, {
			creation: {
				date: {
					"#text": "1905–06",
					"@enddate": "1906",
					"@startdate": "1905",
					"@xml:id": "date_N2104E",
				},
				"@xml:id": "creation_46103232",
			},
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with history", () => {
		const parseResult = v.parse(WorkSchema, {
			history: {
				p: {
					rend: {
						"#text": "Mascarade",
						"@xml:id": "idm1011",
						"@fontstyle": "italic",
					},
					"#text":
						"In the beginning of the 1890s, Carl Nielsen got the idea to base an opera on one of Ludvig Holberg's comedies.",
					"@xml:id": "idm1010",
				},
				"@xml:id": "history_96698b6f",
			},
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with language usage", () => {
		const parseResult = v.parse(WorkSchema, {
			langUsage: {
				language: [
					{
						"#text": "Danish",
						"@xml:id": "da",
					},
					{
						"#text": "English",
						"@xml:id": "en",
					},
				],
				"@xml:id": "langUsage_N21058",
			},
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with multiple titles in different languages", () => {
		const parseResult = v.parse(WorkSchema, {
			title: [
				{
					"#text": "Maskarade",
					"@xml:id": "title_41c4ef82",
					"@xml:lang": "da",
				},
				{
					"#text": "Masquerade",
					"@xml:id": "title_80453ebe",
					"@xml:lang": "en",
				},
				{
					"#text": "Komisk opera i tre akter",
					"@type": "subordinate",
					"@xml:id": "title_a287c05d",
					"@xml:lang": "da",
				},
				{
					"#text": "Comic Opera in Three Acts",
					"@type": "subordinate",
					"@xml:id": "title_378abcba",
					"@xml:lang": "en",
				},
			],
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse work with multiple identifiers", () => {
		const parseResult = v.parse(WorkSchema, {
			identifier: [
				{
					"#text": "2",
					"@label": "CNW",
					"@xml:id": "identifier_N21022",
				},
				{
					"#text": "I/1–3",
					"@label": "CNU",
					"@xml:id": "identifier_N21025",
				},
				{
					"#text": "329",
					"@label": "CNS",
					"@xml:id": "identifier_N21028",
				},
				{
					"#text": "39",
					"@label": "FS",
					"@xml:id": "identifier_N2102B",
				},
			],
			"@xml:id": "work_N2101F",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
