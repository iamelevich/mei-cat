import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { GenreSchema } from "./genre";

describe("GenreSchema", () => {
	it("should be defined", () => {
		expect(GenreSchema).toBeDefined();
	});

	it("should parse a genre element with text content", () => {
		const parseResult = v.parse(GenreSchema, {
			"#text": "letter",
			"@xml:id": "genre_N21066",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a genre element with different text", () => {
		const parseResult = v.parse(GenreSchema, {
			"#text": "opera",
			"@xml:id": "genre_N21067",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a genre element with auth attribute", () => {
		const parseResult = v.parse(GenreSchema, {
			"#text": "symphony",
			"@auth": "LCSH",
			"@xml:id": "genre_N21068",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a genre element with auth.uri attribute", () => {
		const parseResult = v.parse(GenreSchema, {
			"#text": "concerto",
			"@auth": "LCSH",
			"@auth.uri": "http://id.loc.gov/authorities/subjects/",
			"@xml:id": "genre_N21069",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a minimal genre element", () => {
		const parseResult = v.parse(GenreSchema, {
			"#text": "chamber music",
			"@xml:id": "genre_N2106A",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
