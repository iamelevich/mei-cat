import * as v from "valibot";

/**
 * Attributes that record MIDI values..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiValue.html
 */
export const AttrMidiValueSchema = v.object({
	// Direct attributes
	/**
	 * MIDI number.
	 */
	"@val": v.optional(v.string()),
});

export type AttrMidiValueData = v.InferOutput<typeof AttrMidiValueSchema>;
