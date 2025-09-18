import * as v from "valibot";

/**
 * Attributes for layer identification.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerIdent.html
 */
export const AttrLayerIdentSchema = v.object({
  // TODO: Add layer identification attributes
});

export type AttrLayerIdentData = v.InferOutput<typeof AttrLayerIdentSchema>;
