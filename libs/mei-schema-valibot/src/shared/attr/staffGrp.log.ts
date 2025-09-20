import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGrp.log.html
 */
export const AttrStaffGrpLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStaffGrpLogData = v.InferOutput<typeof AttrStaffGrpLogSchema>;
