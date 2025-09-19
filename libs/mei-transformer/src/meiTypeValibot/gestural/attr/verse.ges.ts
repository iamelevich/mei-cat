import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verse.ges.html
 */
export const AttrVerseGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrVerseGesData = v.InferOutput<typeof AttrVerseGesSchema>;
