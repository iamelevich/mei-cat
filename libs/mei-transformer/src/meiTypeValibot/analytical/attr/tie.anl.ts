import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tie.anl.html
 */
export const AttrTieAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTieAnlData = v.InferOutput<typeof AttrTieAnlSchema>;
