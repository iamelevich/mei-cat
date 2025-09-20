import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syl.anl.html
 */
export const AttrSylAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSylAnlData = v.InferOutput<typeof AttrSylAnlSchema>;
