import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.part.log.html
 */
export const AttrPartLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPartLogData = v.InferOutput<typeof AttrPartLogSchema>;
