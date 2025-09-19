import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.anl.html
 */
export const AttrCustosAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCustosAnlData = v.InferOutput<typeof AttrCustosAnlSchema>;
