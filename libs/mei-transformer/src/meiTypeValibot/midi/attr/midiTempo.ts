import * as v from "valibot";

/**
 * Attributes for midiTempo.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiTempo.html
 */
export const AttrMidiTempoSchema = v.object({
  // TODO: Add midiTempo attributes
});

export type AttrMidiTempoData = v.InferOutput<typeof AttrMidiTempoSchema>;
