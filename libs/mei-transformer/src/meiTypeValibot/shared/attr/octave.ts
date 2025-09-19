import * as v from "valibot";

/**
 * Attributes that record written octave..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.html
 */
export const AttrOctaveSchema = v.object({
	// Direct attributes
	/**
	 * Captures written octave information.
	 */
	"@oct": v.optional(v.string()),
});

export type AttrOctaveData = v.InferOutput<typeof AttrOctaveSchema>;
