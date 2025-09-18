import * as v from "valibot";

/**
 * Attributes for parts.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.parts.ges.html
 */
export const AttrPartsGesSchema = v.object({
  // TODO: Add parts.ges attributes
});

export type AttrPartsGesData = v.InferOutput<typeof AttrPartsGesSchema>;
