import * as v from "valibot";

/**
 * Attributes that record performed duration that differs from a feature’s written duration..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.ges.html
 */
export const AttrDurationGesSchema = v.object({
	// Direct attributes
	/**
	 * Number of dots required for a gestural duration when different from that of the written duration.
	 */
	"@dots.ges": v.optional(v.string()),
	/**
	 * Records performed duration information that differs from the written duration.
	 */
	"@dur.ges": v.optional(v.string()),
	/**
	 * Duration as a count of units provided in the time signature denominator.
	 */
	"@dur.metrical": v.optional(v.string()),
	/**
	 * Duration recorded as pulses-per-quarter note, <abbr>e.g.</abbr>, MIDI clicks or MusicXML divisions.
	 */
	"@dur.ppq": v.optional(v.string()),
	/**
	 * Duration in seconds, <abbr>e.g.</abbr>, <val>1.732</val>.
	 */
	"@dur.real": v.optional(v.string()),
	/**
	 * Duration as an optionally dotted <ref target="https://www.humdrum.org/rep/recip/">Humdrum **recip value</ref>.
	 */
	"@dur.recip": v.optional(v.string()),
});

export type AttrDurationGesData = v.InferOutput<typeof AttrDurationGesSchema>;
