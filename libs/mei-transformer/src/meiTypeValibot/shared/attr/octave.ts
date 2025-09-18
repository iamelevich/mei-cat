import * as v from "valibot";

/**
 * Attributes for octave.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.html
 */
export const AttrOctaveSchema = v.object({
  // TODO: Add octave attributes
});

export type AttrOctaveData = v.InferOutput<typeof AttrOctaveSchema>;
