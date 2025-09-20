import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dynam.anl.html
 */
export const AttrDynamAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrDynamAnlData = v.InferOutput<typeof AttrDynamAnlSchema>;
