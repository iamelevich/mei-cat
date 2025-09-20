import * as v from "valibot";

/**
 * Attributes that record MIDI numbers..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiNumber.html
 */
export const AttrMidiNumberSchema = v.object({
	// Direct attributes
	/**
	 * MIDI number in the range set by data.MIDIVALUE.
	 */
	"@num": v.optional(v.string()),
});

export type AttrMidiNumberData = v.InferOutput<typeof AttrMidiNumberSchema>;
