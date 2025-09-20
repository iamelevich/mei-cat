import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.anl.html
 */
export const AttrMidiAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMidiAnlData = v.InferOutput<typeof AttrMidiAnlSchema>;
