import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.ges.html
 */
export const AttrSyllableGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSyllableGesData = v.InferOutput<typeof AttrSyllableGesSchema>;
