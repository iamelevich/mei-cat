import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.anl.html
 */
export const AttrDotAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrDotAnlData = v.InferOutput<typeof AttrDotAnlSchema>;
