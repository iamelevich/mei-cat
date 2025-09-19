import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.gliss.anl.html
 */
export const AttrGlissAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrGlissAnlData = v.InferOutput<typeof AttrGlissAnlSchema>;
