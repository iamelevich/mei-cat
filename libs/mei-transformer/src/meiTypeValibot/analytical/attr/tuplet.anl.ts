import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.anl.html
 */
export const AttrTupletAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTupletAnlData = v.InferOutput<typeof AttrTupletAnlSchema>;
