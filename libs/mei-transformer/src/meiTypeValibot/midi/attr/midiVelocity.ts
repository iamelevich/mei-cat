import * as v from "valibot";

/**
 * MIDI attributes pertaining to key velocity..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiVelocity.html
 */
export const AttrMidiVelocitySchema = v.object({
	// Direct attributes
	/**
	 * MIDI Note-on/off velocity.
	 */
	"@vel": v.optional(v.string()),
});

export type AttrMidiVelocityData = v.InferOutput<typeof AttrMidiVelocitySchema>;
