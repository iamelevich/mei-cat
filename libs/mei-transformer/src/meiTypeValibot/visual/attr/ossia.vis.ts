import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.vis.html
 */
export const AttrOssiaVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOssiaVisData = v.InferOutput<typeof AttrOssiaVisSchema>;
