import * as v from "valibot";

/**
 * Attributes for midiVelocity.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiVelocity.html
 */
export const AttrMidiVelocitySchema = v.object({
  // TODO: Add midiVelocity attributes
});

export type AttrMidiVelocityData = v.InferOutput<typeof AttrMidiVelocitySchema>;
