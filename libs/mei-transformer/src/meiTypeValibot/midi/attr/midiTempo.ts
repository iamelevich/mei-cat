import * as v from "valibot";

/**
 * Attributes that record MIDI tempo information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiTempo.html
 */
export const AttrMidiTempoSchema = v.object({
	// Direct attributes
	/**
	 * Captures the number of *quarter notes* per minute. In MIDI, a beat is always defined as a quarter note, *not the numerator of the time signature or the metronomic indication*.
	 */
	"@midi.bpm": v.optional(v.string()),
	/**
	 * Records the number of microseconds per *quarter note*. In MIDI, a beat is always defined as a quarter note, *not the numerator of the time signature or the metronomic indication*. At 120 quarter notes per minute, each quarter note will last 500,000 microseconds.
	 */
	"@midi.mspb": v.optional(v.string()),
});

export type AttrMidiTempoData = v.InferOutput<typeof AttrMidiTempoSchema>;
