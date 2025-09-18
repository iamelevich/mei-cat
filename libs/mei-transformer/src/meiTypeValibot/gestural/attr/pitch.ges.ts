import * as v from "valibot";

/**
 * Attributes for pitch.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitch.ges.html
 */
export const AttrPitchGesSchema = v.object({
  // TODO: Add pitch.ges attributes
});

export type AttrPitchGesData = v.InferOutput<typeof AttrPitchGesSchema>;
