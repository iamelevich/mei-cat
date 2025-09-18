import * as v from "valibot";

/**
 * Attributes for midi.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.anl.html
 */
export const AttrMidiAnlSchema = v.object({
  // TODO: Add midi.anl attributes
});

export type AttrMidiAnlData = v.InferOutput<typeof AttrMidiAnlSchema>;
