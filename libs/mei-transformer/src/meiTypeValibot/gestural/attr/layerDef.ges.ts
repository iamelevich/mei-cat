import * as v from "valibot";

/**
 * Attributes for layerDef.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.ges.html
 */
export const AttrLayerDefGesSchema = v.object({
  // TODO: Add layerDef.ges attributes
});

export type AttrLayerDefGesData = v.InferOutput<typeof AttrLayerDefGesSchema>;
