import * as v from "valibot";

/**
 * Gestural domain attributes that describe the properties of a stem in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.ges.html
 */
export const AttrStemGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStemGesData = v.InferOutput<typeof AttrStemGesSchema>;
