import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.anl.html
 */
export const AttrEndingAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrEndingAnlData = v.InferOutput<typeof AttrEndingAnlSchema>;
