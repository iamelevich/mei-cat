import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { RelatedItemSchema } from "./relatedItem";

describe("RelatedItemSchema", () => {
	it("should be defined", () => {
		expect(RelatedItemSchema).toBeDefined();
	});

	it("should parse a relatedItem with bibl containing title and biblScope", () => {
		const parseResult = v.parse(RelatedItemSchema, {
			bibl: {
				title: {
					"#text": "CNB",
					"@xml:id": "title_N2107D",
				},
				biblScope: {
					"#text": "II/325",
					"@xml:id": "biblScope_N2107F",
				},
				"@label": "",
				"@xml:id": "bibl_d1e55065405",
			},
			"@rel": "host",
			"@xml:id": "relatedItem_N21078",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a relatedItem with different relation type", () => {
		const parseResult = v.parse(RelatedItemSchema, {
			bibl: {
				title: {
					"#text": "M & M",
					"@xml:id": "title_N21086",
				},
				biblScope: {
					"#text": "58",
					"@xml:id": "biblScope_N21088",
				},
				"@xml:id": "bibl_d1e55185417",
			},
			"@rel": "isReferencedBy",
			"@xml:id": "relatedItem_N21081",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a relatedItem with minimal bibl", () => {
		const parseResult = v.parse(RelatedItemSchema, {
			bibl: {
				title: {
					"#text": "CNL",
					"@xml:id": "title_93788bc5b3cd",
				},
				"@xml:id": "bibl_9378db1bae0b",
			},
			"@rel": "host",
			"@xml:id": "relatedItem_9378970ef092",
		});

		expect(parseResult).toMatchSnapshot();
	});

	it("should parse a relatedItem with just title", () => {
		const parseResult = v.parse(RelatedItemSchema, {
			bibl: {
				title: {
					"#text": "Reference Work",
					"@xml:id": "title_ref001",
				},
				"@xml:id": "bibl_ref001",
			},
			"@xml:id": "relatedItem_ref001",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
