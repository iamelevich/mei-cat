import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.anl.html
 */
export const AttrLigatureAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLigatureAnlData = v.InferOutput<typeof AttrLigatureAnlSchema>;
