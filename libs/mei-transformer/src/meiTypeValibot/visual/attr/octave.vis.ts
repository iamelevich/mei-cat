import * as v from "valibot";

/**
 * Attributes for octave.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.vis.html
 */
export const AttrOctaveVisSchema = v.object({
  // TODO: Add octave.vis attributes
});

export type AttrOctaveVisData = v.InferOutput<typeof AttrOctaveVisSchema>;
