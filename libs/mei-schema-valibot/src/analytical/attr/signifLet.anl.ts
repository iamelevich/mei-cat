import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.anl.html
 */
export const AttrSignifLetAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSignifLetAnlData = v.InferOutput<typeof AttrSignifLetAnlSchema>;
