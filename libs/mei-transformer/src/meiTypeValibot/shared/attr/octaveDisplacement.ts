import * as v from "valibot";

/**
 * Attributes for octave displacement.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octaveDisplacement.html
 */
export const AttrOctaveDisplacementSchema = v.object({
  // TODO: Add octave displacement attributes
});

export type AttrOctaveDisplacementData = v.InferOutput<typeof AttrOctaveDisplacementSchema>;
