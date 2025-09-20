import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.log.html
 */
export const AttrLigatureLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLigatureLogData = v.InferOutput<typeof AttrLigatureLogSchema>;
