import * as v from "valibot";

/**
 * Attributes for midi.event.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.event.html
 */
export const AttrMidiEventSchema = v.object({
  // TODO: Add midi.event attributes
});

export type AttrMidiEventData = v.InferOutput<typeof AttrMidiEventSchema>;
