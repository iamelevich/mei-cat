import * as v from "valibot";

/**
 * Attributes for neume.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neume.ges.html
 */
export const AttrNeumeGesSchema = v.object({
  // TODO: Add neume.ges attributes
});

export type AttrNeumeGesData = v.InferOutput<typeof AttrNeumeGesSchema>;
