import * as v from "valibot";

/**
 * Attributes for midiInstrument.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiInstrument.html
 */
export const AttrMidiInstrumentSchema = v.object({
  // TODO: Add midiInstrument attributes
});

export type AttrMidiInstrumentData = v.InferOutput<typeof AttrMidiInstrumentSchema>;
