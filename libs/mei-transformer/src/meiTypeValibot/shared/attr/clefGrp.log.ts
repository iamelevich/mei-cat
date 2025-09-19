import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.log.html
 */
export const AttrClefGrpLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrClefGrpLogData = v.InferOutput<typeof AttrClefGrpLogSchema>;
