import * as v from "valibot";

/**
 * Attributes for origin layer identification.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.layerIdent.html
 */
export const AttrOriginLayerIdentSchema = v.object({
  // TODO: Add origin layer identification attributes
});

export type AttrOriginLayerIdentData = v.InferOutput<typeof AttrOriginLayerIdentSchema>;
