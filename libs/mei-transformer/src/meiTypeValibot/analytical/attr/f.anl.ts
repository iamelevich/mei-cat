import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.f.anl.html
 */
export const AttrFAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrFAnlData = v.InferOutput<typeof AttrFAnlSchema>;
