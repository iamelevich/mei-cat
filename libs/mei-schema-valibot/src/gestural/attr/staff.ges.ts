import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.ges.html
 */
export const AttrStaffGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStaffGesData = v.InferOutput<typeof AttrStaffGesSchema>;
