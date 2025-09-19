import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { PhysLocSchema } from "./physLoc";

describe("PhysLocSchema", () => {
	it("should be defined", () => {
		expect(PhysLocSchema).toBeDefined();
	});

	it("should parse a physLoc with repository and identifier", () => {
		const parseResult = v.parse(PhysLocSchema, {
			repository: {
				identifier: {
					"#text": "DK-Kk",
					"@auth.uri": "http://www.rism.info/",
					"@auth": "RISM",
					"@xml:id": "identifier_N21072",
				},
				"@xml:id": "repository_N21071",
			},
			identifier: {
				"#text": "CNA IAc",
				"@xml:id": "identifier_N21076",
			},
			"@xml:id": "physLoc_N21070",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a physLoc with just repository", () => {
		const parseResult = v.parse(PhysLocSchema, {
			repository: {
				identifier: {
					"#text": "DK-Kk",
					"@auth": "RISM",
					"@xml:id": "identifier_N21072",
				},
				"@xml:id": "repository_N21071",
			},
			"@xml:id": "physLoc_N21070",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a physLoc with just identifier", () => {
		const parseResult = v.parse(PhysLocSchema, {
			identifier: {
				"#text": "CNA IAc",
				"@xml:id": "identifier_N21076",
			},
			"@xml:id": "physLoc_N21070",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a minimal physLoc", () => {
		const parseResult = v.parse(PhysLocSchema, {
			"@xml:id": "physLoc_N21070",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a physLoc with multiple identifiers", () => {
		const parseResult = v.parse(PhysLocSchema, {
			identifier: [
				{
					"#text": "CNA IAc",
					"@xml:id": "identifier_N21076",
				},
				{
					"#text": "NKS 5155, 4°",
					"@xml:id": "identifier_N2109D",
				},
			],
			"@xml:id": "physLoc_N21070",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
