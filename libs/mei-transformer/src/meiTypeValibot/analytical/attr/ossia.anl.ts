import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.anl.html
 */
export const AttrOssiaAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOssiaAnlData = v.InferOutput<typeof AttrOssiaAnlSchema>;
