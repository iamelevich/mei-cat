import * as v from "valibot";

/**
 * Attributes that record MIDI instrument information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midiInstrument.html
 */
export const AttrMidiInstrumentSchema = v.object({
	// Direct attributes
	/**
	 * Provides a General MIDI label for the MIDI instrument.
	 */
	"@midi.instrname": v.optional(v.string()),
	/**
	 * Captures the General MIDI instrument number. Use an integer for a 0-based value.
	 */
	"@midi.instrnum": v.optional(v.string()),
	/**
	 * Sets the instrument’s position in a stereo field. MIDI values of 0 and 1 both pan left, 127 or 128 pans right, and 63 or 64 pans to the center. Positve percentage values pan to the right, negative ones to the left. 0% is centered.
	 */
	"@midi.pan": v.optional(v.string()),
	/**
	 * Records a non-General MIDI patch/instrument name.
	 */
	"@midi.patchname": v.optional(v.string()),
	/**
	 * Records a non-General MIDI patch/instrument number.
	 */
	"@midi.patchnum": v.optional(v.string()),
	/**
	 * Sets the instrument’s volume.
	 */
	"@midi.volume": v.optional(v.string()),
});

export type AttrMidiInstrumentData = v.InferOutput<
	typeof AttrMidiInstrumentSchema
>;
