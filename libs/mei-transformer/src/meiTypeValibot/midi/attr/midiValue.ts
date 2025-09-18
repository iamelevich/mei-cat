import * as v from "valibot";

/**
 * Attributes for midiValue.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiValue.html
 */
export const AttrMidiValueSchema = v.object({
  // TODO: Add midiValue attributes
});

export type AttrMidiValueData = v.InferOutput<typeof AttrMidiValueSchema>;
