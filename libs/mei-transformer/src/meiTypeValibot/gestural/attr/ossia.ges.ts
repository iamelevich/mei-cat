import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.ges.html
 */
export const AttrOssiaGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOssiaGesData = v.InferOutput<typeof AttrOssiaGesSchema>;
