import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.anl.html
 */
export const AttrStaffAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStaffAnlData = v.InferOutput<typeof AttrStaffAnlSchema>;
