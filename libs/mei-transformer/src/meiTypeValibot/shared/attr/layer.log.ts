import * as v from "valibot";

/**
 * Attributes for layer logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layer.log.html
 */
export const AttrLayerLogSchema = v.object({
  // TODO: Add layer logging attributes
});

export type AttrLayerLogData = v.InferOutput<typeof AttrLayerLogSchema>;
