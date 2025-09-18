import * as v from "valibot";

/**
 * Attributes for layer definition logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.log.html
 */
export const AttrLayerDefLogSchema = v.object({
  // TODO: Add layer definition logging attributes
});

export type AttrLayerDefLogData = v.InferOutput<typeof AttrLayerDefLogSchema>;
