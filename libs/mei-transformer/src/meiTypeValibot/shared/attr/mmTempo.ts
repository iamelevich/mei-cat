import * as v from "valibot";

/**
 * Attributes that record tempo in terms of beats per minute..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mmTempo.html
 */
export const AttrMmTempoSchema = v.object({
	// Direct attributes
	/**
	 * Used to describe tempo in terms of beats (often the meter signature denominator) per minute, ala M.M. (Maelzel’s Metronome). Do not confuse this attribute with midi.bpm or midi.mspb. In MIDI, a beat is always defined as a quarter note, *not the numerator of the time signature or the metronomic indication*.
	 */
	"@mm": v.optional(v.string()),
	/**
	 * Records the number of augmentation dots required by a dotted metronome unit.
	 */
	"@mm.dots": v.optional(v.string()),
	/**
	 * Captures the metronomic unit.
	 */
	"@mm.unit": v.optional(v.string()),
});

export type AttrMmTempoData = v.InferOutput<typeof AttrMmTempoSchema>;
