import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.anl.html
 */
export const AttrHairpinAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrHairpinAnlData = v.InferOutput<typeof AttrHairpinAnlSchema>;
