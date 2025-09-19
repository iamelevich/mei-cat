import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.anl.html
 */
export const AttrStaffGrpAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStaffGrpAnlData = v.InferOutput<typeof AttrStaffGrpAnlSchema>;
