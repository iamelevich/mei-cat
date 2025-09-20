import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { SeriesStmtSchema } from "./seriesStmt";

describe("SeriesStmtSchema", () => {
	it("should be defined", () => {
		expect(SeriesStmtSchema).toBeDefined();
	});

	it("should be a valid schema", () => {
		const parseResult = v.parse(SeriesStmtSchema, {
			title: {
				"#text": "Carl Nielsen Works",
				"@xml:id": "title_adfefe6a",
			},
			identifier: {
				"#text": "CNW",
				"@type": "file_collection",
				"@xml:id": "identifier_47b68436",
			},
			"@xml:id": "seriesStmt_N202E5",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
