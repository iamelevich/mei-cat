import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.ges.html
 */
export const AttrLigatureGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLigatureGesData = v.InferOutput<typeof AttrLigatureGesSchema>;
