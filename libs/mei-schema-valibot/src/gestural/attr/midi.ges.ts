import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.ges.html
 */
export const AttrMidiGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMidiGesData = v.InferOutput<typeof AttrMidiGesSchema>;
