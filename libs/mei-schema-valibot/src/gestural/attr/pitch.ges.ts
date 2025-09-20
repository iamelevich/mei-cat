import * as v from "valibot";

/**
 * Gestural attributes about pitch..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitch.ges.html
 */
export const AttrPitchGesSchema = v.object({
	// Direct attributes
	/**
	 * Records performed octave information that differs from the written value.
	 */
	"@oct.ges": v.optional(v.string()),
	/**
	 * Contains a performed pitch name that differs from the written value.
	 */
	"@pname.ges": v.optional(v.string()),
	/**
	 * Holds a pitch-to-number mapping, a base-40 or MIDI note number, for example.
	 */
	"@pnum": v.optional(v.string()),
});

export type AttrPitchGesData = v.InferOutput<typeof AttrPitchGesSchema>;
