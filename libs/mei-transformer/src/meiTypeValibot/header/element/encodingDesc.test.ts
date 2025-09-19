import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { EncodingDescSchema } from "./encodingDesc";

describe("EncodingDescSchema", () => {
	it("should be defined", () => {
		expect(EncodingDescSchema).toBeDefined();
	});

	it("should be a valid schema", () => {
		const parseResult = v.parse(EncodingDescSchema, {
			appInfo: {
				application: [
					{
						name: {
							"#text": "MerMEId",
							"@xml:id": "name_N21015",
						},
						ptr: {
							"@label": "MerMEId project home page",
							"@target": "http://www.kb.dk/en/nb/dcm/projekter/mermeid.html",
							"@xml:id": "ptr_N21017",
						},
						"@version": "2013",
						"@xml:id": "application_N21013",
					},
					{
						name: {
							"#text": "mei40To51.xsl",
						},
						ptr: {
							"@target":
								"https://github.com/music-encoding/encoding-tools/blob/main/mei40To51/mei40To51.xsl",
						},
						"@version": "v1.0",
						"@xml:id": "mei40To51",
					},
				],
				"@xml:id": "appInfo_N21012",
			},
			projectDesc: {
				p: {
					"#text": "Metadata created using MerMEId 2013.",
					"@xml:id": "idm992",
				},
				"@xml:id": "projectDesc_3d523cff",
			},
			classDecls: {
				taxonomy: {
					category: [
						{
							"@xml:id": "DcmContentClass",
						},
						{
							"@xml:id": "DcmPresentationClass",
						},
						{
							"@xml:id": "DcmAuthorityClass",
						},
						{
							"@xml:id": "DcmScoringClass",
						},
						{
							"@xml:id": "DcmStateClass",
						},
						{
							"@xml:id": "DcmCompletenessClass",
						},
					],
					"@xml:id": "DcmSourceClassification",
				},
			},
			"@xml:id": "encodingDesc_N21011",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
