import * as v from "valibot";

/**
 * Attributes for bend.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.vis.html
 */
export const AttrBendVisSchema = v.object({
  // TODO: Add bend.vis attributes
});

export type AttrBendVisData = v.InferOutput<typeof AttrBendVisSchema>;
