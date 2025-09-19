import * as v from "valibot";
import { AttrMidiTempoSchema } from "../../midi/attr/midiTempo";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tempo.ges.html
 */
export const AttrTempoGesSchema = v.object({
	// Inherited attribute classes
	...AttrMidiTempoSchema.entries,
});

export type AttrTempoGesData = v.InferOutput<typeof AttrTempoGesSchema>;
