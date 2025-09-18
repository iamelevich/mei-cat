import * as v from "valibot";

/**
 * Attributes for midi.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.log.html
 */
export const AttrMidiLogSchema = v.object({
  // TODO: Add midi.log attributes
});

export type AttrMidiLogData = v.InferOutput<typeof AttrMidiLogSchema>;
