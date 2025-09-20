import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.parts.vis.html
 */
export const AttrPartsVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPartsVisData = v.InferOutput<typeof AttrPartsVisSchema>;
