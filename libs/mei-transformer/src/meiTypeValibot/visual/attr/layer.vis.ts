import * as v from "valibot";

/**
 * Attributes for layer.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layer.vis.html
 */
export const AttrLayerVisSchema = v.object({
  // TODO: Add layer.vis attributes
});

export type AttrLayerVisData = v.InferOutput<typeof AttrLayerVisSchema>;
