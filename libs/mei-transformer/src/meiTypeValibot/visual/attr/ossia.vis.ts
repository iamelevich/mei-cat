import * as v from "valibot";

/**
 * Attributes for ossia.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.vis.html
 */
export const AttrOssiaVisSchema = v.object({
  // TODO: Add ossia.vis attributes
});

export type AttrOssiaVisData = v.InferOutput<typeof AttrOssiaVisSchema>;
