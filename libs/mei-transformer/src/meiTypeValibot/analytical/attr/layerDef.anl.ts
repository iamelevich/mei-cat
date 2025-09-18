import * as v from "valibot";

/**
 * Attributes for layerDef.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.anl.html
 */
export const AttrLayerDefAnlSchema = v.object({
  // TODO: Add layerDef.anl attributes
});

export type AttrLayerDefAnlData = v.InferOutput<typeof AttrLayerDefAnlSchema>;
