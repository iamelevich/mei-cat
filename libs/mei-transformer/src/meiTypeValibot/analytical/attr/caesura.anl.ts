import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.caesura.anl.html
 */
export const AttrCaesuraAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCaesuraAnlData = v.InferOutput<typeof AttrCaesuraAnlSchema>;
