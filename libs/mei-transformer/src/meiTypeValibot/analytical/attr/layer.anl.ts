import * as v from "valibot";

/**
 * Attributes for layer.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layer.anl.html
 */
export const AttrLayerAnlSchema = v.object({
  // TODO: Add layer.anl attributes
});

export type AttrLayerAnlData = v.InferOutput<typeof AttrLayerAnlSchema>;
