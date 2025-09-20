import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { RespStmtSchema } from "./respStmt";

describe("RespStmtSchema", () => {
	it("should be defined", () => {
		expect(RespStmtSchema).toBeDefined();
	});

	it("should be a valid schema", () => {
		const parseResult = v.safeParse(RespStmtSchema, {
			name: {
				"#text": "ebp",
				"@xml:id": "resp_a27b49ae",
			},
			"@xml:id": "respStmt_d8b306d3",
		});

		expect(parseResult.success).toBe(true);
		expect(parseResult.output).toMatchSnapshot();
	});

	it("should be a valid shema with array of names", () => {
		const parseResult = v.safeParse(RespStmtSchema, {
			name: [
				{
					"#text": "ebp",
					"@xml:id": "resp_a27b49ae",
				},
				{
					"#text": "name 2",
					"@xml:id": "name_a27b49ae",
				},
			],
		});

		expect(parseResult.success).toBe(true);
		expect(parseResult.output).toMatchSnapshot();
	});
});
