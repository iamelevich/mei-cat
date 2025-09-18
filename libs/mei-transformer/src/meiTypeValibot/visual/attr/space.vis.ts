import * as v from "valibot";

/**
 * Attributes for space.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.vis.html
 */
export const AttrSpaceVisSchema = v.object({
  // TODO: Add space.vis attributes
});

export type AttrSpaceVisData = v.InferOutput<typeof AttrSpaceVisSchema>;
