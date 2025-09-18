import * as v from "valibot";

/**
 * Attributes for repeatMark.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.repeatMark.vis.html
 */
export const AttrRepeatMarkVisSchema = v.object({
  // TODO: Add repeatMark.vis attributes
});

export type AttrRepeatMarkVisData = v.InferOutput<typeof AttrRepeatMarkVisSchema>;
