import * as v from "valibot";

/**
 * Logical domain attributes that describe the properties of a stem in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.log.html
 */
export const AttrStemLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStemLogData = v.InferOutput<typeof AttrStemLogSchema>;
