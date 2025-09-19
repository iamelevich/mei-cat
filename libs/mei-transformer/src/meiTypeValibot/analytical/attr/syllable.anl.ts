import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.anl.html
 */
export const AttrSyllableAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSyllableAnlData = v.InferOutput<typeof AttrSyllableAnlSchema>;
