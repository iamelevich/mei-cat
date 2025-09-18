import * as v from "valibot";

/**
 * Attributes for mSpace.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.vis.html
 */
export const AttrMSpaceVisSchema = v.object({
  // TODO: Add mSpace.vis attributes
});

export type AttrMSpaceVisData = v.InferOutput<typeof AttrMSpaceVisSchema>;
