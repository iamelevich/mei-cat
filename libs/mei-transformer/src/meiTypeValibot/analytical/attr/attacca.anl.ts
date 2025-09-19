import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.anl.html
 */
export const AttrAttaccaAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAttaccaAnlData = v.InferOutput<typeof AttrAttaccaAnlSchema>;
