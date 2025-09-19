import * as v from "valibot";

/**
 * Attributes that record MIDI channel information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.channelized.html
 */
export const AttrChannelizedSchema = v.object({
	// Direct attributes
	/**
	 * Records a MIDI channel value.
	 */
	"@midi.channel": v.optional(v.string()),
	/**
	 * Specifies the 'on' part of the duty cycle as a percentage of a note’s duration.
	 */
	"@midi.duty": v.optional(v.string()),
	/**
	 * Sets the MIDI port value.
	 */
	"@midi.port": v.optional(v.string()),
	/**
	 * Sets the MIDI track.
	 */
	"@midi.track": v.optional(v.string()),
});

export type AttrChannelizedData = v.InferOutput<typeof AttrChannelizedSchema>;
