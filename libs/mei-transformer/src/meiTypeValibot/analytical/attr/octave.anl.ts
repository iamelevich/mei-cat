import * as v from "valibot";

/**
 * Attributes for octave.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.anl.html
 */
export const AttrOctaveAnlSchema = v.object({
  // TODO: Add octave.anl attributes
});

export type AttrOctaveAnlData = v.InferOutput<typeof AttrOctaveAnlSchema>;
