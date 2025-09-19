import * as v from "valibot";

/**
 * Attributes that record time-base information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timeBase.html
 */
export const AttrTimeBaseSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the number of pulses (sometimes referred to as ticks or divisions) per quarter note. Unlike MIDI, MEI permits different values for a score and individual staves.
	 */
	"@ppq": v.optional(v.string()),
});

export type AttrTimeBaseData = v.InferOutput<typeof AttrTimeBaseSchema>;
