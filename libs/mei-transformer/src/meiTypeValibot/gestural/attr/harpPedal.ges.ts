import * as v from "valibot";

/**
 * Attributes for harpPedal.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.ges.html
 */
export const AttrHarpPedalGesSchema = v.object({
  // TODO: Add harpPedal.ges attributes
});

export type AttrHarpPedalGesData = v.InferOutput<typeof AttrHarpPedalGesSchema>;
