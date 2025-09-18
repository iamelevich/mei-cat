import * as v from "valibot";

/**
 * Attributes for midiValue2.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiValue2.html
 */
export const AttrMidiValue2Schema = v.object({
  // TODO: Add midiValue2 attributes
});

export type AttrMidiValue2Data = v.InferOutput<typeof AttrMidiValue2Schema>;
