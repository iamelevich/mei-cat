import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { ChangeDescSchema } from "./changeDesc";

describe("ChangeDescSchema", () => {
	it("should be defined", () => {
		expect(ChangeDescSchema).toBeDefined();
	});

	it("should be a valid schema", () => {
		const parseResult = v.safeParse(ChangeDescSchema, {
			p: {
				"#text": "tab 1",
				"@xml:id": "p_N25CCC",
			},
			"@xml:id": "changeDesc_N25CCB",
		});

		expect(parseResult.success).toBe(true);
		expect(parseResult.output).toMatchSnapshot();
	});
});
