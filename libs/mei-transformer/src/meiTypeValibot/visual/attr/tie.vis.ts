import * as v from "valibot";

/**
 * Attributes for tie.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tie.vis.html
 */
export const AttrTieVisSchema = v.object({
  // TODO: Add tie.vis attributes
});

export type AttrTieVisData = v.InferOutput<typeof AttrTieVisSchema>;
