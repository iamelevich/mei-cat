import * as v from "valibot";

/**
 * Attributes for midiNumber.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiNumber.html
 */
export const AttrMidiNumberSchema = v.object({
  // TODO: Add midiNumber attributes
});

export type AttrMidiNumberData = v.InferOutput<typeof AttrMidiNumberSchema>;
