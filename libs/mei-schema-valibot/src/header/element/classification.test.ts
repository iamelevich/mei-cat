import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { ClassificationSchema } from "./classification";

describe("ClassificationSchema", () => {
	it("should be defined", () => {
		expect(ClassificationSchema).toBeDefined();
	});

	it("should be a valid schema for cnw0002", () => {
		const parseResult = v.parse(ClassificationSchema, {
			termList: {
				term: [
					{
						"#text": "Stage music",
						"@xml:id": "term_N25086",
					},
					{
						"#text": "Opera",
						"@xml:id": "term_N25088",
					},
				],
				"@xml:id": "termList_N25085",
			},
			"@xml:id": "classification_N25072",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
