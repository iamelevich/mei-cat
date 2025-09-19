import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { ChangeSchema } from "./change";

describe("ChangeSchema", () => {
	it("should be defined", () => {
		expect(ChangeSchema).toBeDefined();
	});

	it("should be a valid schema", () => {
		const parseResult = v.parse(ChangeSchema, {
			respStmt: {
				name: {
					"#text": "ebp",
					"@xml:id": "resp_a27b49ae",
				},
				"@xml:id": "respStmt_d8b306d3",
			},
			changeDesc: {
				p: {
					"#text": "tab 1",
					"@xml:id": "p_N25CCC",
				},
				"@xml:id": "changeDesc_N25CCB",
			},
			"@isodate": "2011-09-15",
			"@xml:id": "change_d1e2460524057",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should be a valid schema with optional changeDesc", () => {
		const parseResult = v.parse(ChangeSchema, {
			respStmt: {
				name: {
					"#text": "ebp",
					"@xml:id": "resp_a27b49ae",
				},
			},
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should be a valid schema with optional respStmt", () => {
		const parseResult = v.parse(ChangeSchema, {
			changeDesc: {
				p: {
					"#text": "tab 1",
					"@xml:id": "p_N25CCC",
				},
			},
		});

		expect(parseResult).toMatchSnapshot();
	});
});
