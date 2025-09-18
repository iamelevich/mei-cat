import * as v from "valibot";

/**
 * Attributes for strophicus.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.strophicus.vis.html
 */
export const AttrStrophicusVisSchema = v.object({
  // TODO: Add strophicus.vis attributes
});

export type AttrStrophicusVisData = v.InferOutput<typeof AttrStrophicusVisSchema>;
