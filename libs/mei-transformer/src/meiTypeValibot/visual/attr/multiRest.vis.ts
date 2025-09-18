import * as v from "valibot";

/**
 * Attributes for multiRest.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.vis.html
 */
export const AttrMultiRestVisSchema = v.object({
  // TODO: Add multiRest.vis attributes
});

export type AttrMultiRestVisData = v.InferOutput<typeof AttrMultiRestVisSchema>;
