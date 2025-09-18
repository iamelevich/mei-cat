import * as v from "valibot";

/**
 * Attributes for layer.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layer.ges.html
 */
export const AttrLayerGesSchema = v.object({
  // TODO: Add layer.ges attributes
});

export type AttrLayerGesData = v.InferOutput<typeof AttrLayerGesSchema>;
