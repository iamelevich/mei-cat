import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.parts.log.html
 */
export const AttrPartsLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPartsLogData = v.InferOutput<typeof AttrPartsLogSchema>;
