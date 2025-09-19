import * as v from "valibot";

/**
 * Analytical domain attributes that describe the properties of a stem in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.anl.html
 */
export const AttrStemAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStemAnlData = v.InferOutput<typeof AttrStemAnlSchema>;
