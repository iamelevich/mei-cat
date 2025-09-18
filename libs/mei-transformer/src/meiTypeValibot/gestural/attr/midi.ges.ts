import * as v from "valibot";

/**
 * Attributes for midi.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.ges.html
 */
export const AttrMidiGesSchema = v.object({
  // TODO: Add midi.ges attributes
});

export type AttrMidiGesData = v.InferOutput<typeof AttrMidiGesSchema>;
