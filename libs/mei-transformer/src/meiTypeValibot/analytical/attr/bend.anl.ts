import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.anl.html
 */
export const AttrBendAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBendAnlData = v.InferOutput<typeof AttrBendAnlSchema>;
