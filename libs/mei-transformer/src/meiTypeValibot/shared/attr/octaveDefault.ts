import * as v from "valibot";

/**
 * Attributes for octave default.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octaveDefault.html
 */
export const AttrOctaveDefaultSchema = v.object({
  // TODO: Add octave default attributes
});

export type AttrOctaveDefaultData = v.InferOutput<typeof AttrOctaveDefaultSchema>;
