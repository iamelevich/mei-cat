import * as v from "valibot";

/**
 * Attributes for dot.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.vis.html
 */
export const AttrDotVisSchema = v.object({
  // TODO: Add dot.vis attributes
});

export type AttrDotVisData = v.InferOutput<typeof AttrDotVisSchema>;
