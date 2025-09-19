import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sp.anl.html
 */
export const AttrSpAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSpAnlData = v.InferOutput<typeof AttrSpAnlSchema>;
