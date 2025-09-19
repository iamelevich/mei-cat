import * as v from "valibot";

/**
 * Attributes that record terminal MIDI values..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiValue2.html
 */
export const AttrMidiValue2Schema = v.object({
	// Direct attributes
	/**
	 * MIDI number.
	 */
	"@val2": v.optional(v.string()),
});

export type AttrMidiValue2Data = v.InferOutput<typeof AttrMidiValue2Schema>;
