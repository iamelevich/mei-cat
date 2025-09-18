import * as v from "valibot";

/**
 * Attributes for octave.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.ges.html
 */
export const AttrOctaveGesSchema = v.object({
  // TODO: Add octave.ges attributes
});

export type AttrOctaveGesData = v.InferOutput<typeof AttrOctaveGesSchema>;
