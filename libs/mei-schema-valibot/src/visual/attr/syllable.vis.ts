import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.vis.html
 */
export const AttrSyllableVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSyllableVisData = v.InferOutput<typeof AttrSyllableVisSchema>;
