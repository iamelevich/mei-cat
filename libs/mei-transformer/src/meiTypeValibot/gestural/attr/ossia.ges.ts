import * as v from "valibot";

/**
 * Attributes for ossia.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.ges.html
 */
export const AttrOssiaGesSchema = v.object({
  // TODO: Add ossia.ges attributes
});

export type AttrOssiaGesData = v.InferOutput<typeof AttrOssiaGesSchema>;
