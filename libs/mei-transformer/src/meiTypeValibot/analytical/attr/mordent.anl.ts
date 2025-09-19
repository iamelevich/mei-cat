import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mordent.anl.html
 */
export const AttrMordentAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMordentAnlData = v.InferOutput<typeof AttrMordentAnlSchema>;
