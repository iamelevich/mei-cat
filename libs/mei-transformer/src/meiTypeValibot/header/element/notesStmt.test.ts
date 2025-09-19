import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { NotesStmtSchema } from "./notesStmt";

describe("NotesStmtSchema", () => {
	it("should be defined", () => {
		expect(NotesStmtSchema).toBeDefined();
	});

	it("should be a valid schema for cnw0002", () => {
		const parseResult = v.parse(NotesStmtSchema, {
			annot: {
				ptr: [
					{
						"@label": "Carl Nielsen Edition (Act 1)",
						"@mimetype": "",
						"@target": "/dcm/assets/cnu/pdf/CNU_I_01_E_maskarade_1.pdf",
						"@xml:id": "ptr_d2feb4f8",
					},
					{
						"@label": "Carl Nielsen Edition (Act 2)",
						"@mimetype": "",
						"@target": "/dcm/assets/cnu/pdf/CNU_I_02_E_maskarade_2.pdf",
						"@xml:id": "ptr_d0eb1e0d",
					},
					{
						"@label": "Carl Nielsen Edition (Act 3)",
						"@mimetype": "",
						"@target": "/dcm/assets/cnu/pdf/CNU_I_03_E_maskarade_3.pdf",
						"@xml:id": "ptr_1977910a",
					},
					{
						"@label": "Carl Nielsen Edition (Critical Commentary)",
						"@mimetype": "",
						"@target":
							"/dcm/assets/cnu/pdf/CNU_I_01-03_maskarade_critical_commentary.pdf",
						"@xml:id": "ptr_d4a1f0fd",
					},
				],
				"@label": "",
				"@type": "links",
				"@xml:id": "annot_3ca9f3c0",
			},
			"@xml:id": "notesStmt_N2505A",
		});

		expect(parseResult).toMatchSnapshot();
	});
});
