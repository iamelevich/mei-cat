import * as v from "valibot";

/**
 * Attributes for pedal.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.ges.html
 */
export const AttrPedalGesSchema = v.object({
  // TODO: Add pedal.ges attributes
});

export type AttrPedalGesData = v.InferOutput<typeof AttrPedalGesSchema>;
