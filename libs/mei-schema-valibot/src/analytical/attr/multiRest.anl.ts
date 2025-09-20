import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.anl.html
 */
export const AttrMultiRestAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMultiRestAnlData = v.InferOutput<typeof AttrMultiRestAnlSchema>;
