import * as v from "valibot";

/**
 * Attributes for layerDef.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.vis.html
 */
export const AttrLayerDefVisSchema = v.object({
  // TODO: Add layerDef.vis attributes
});

export type AttrLayerDefVisData = v.InferOutput<typeof AttrLayerDefVisSchema>;
