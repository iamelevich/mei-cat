import * as v from "valibot";

/**
 * Attributes that record a default value for octave..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octaveDefault.html
 */
export const AttrOctaveDefaultSchema = v.object({
	// Direct attributes
	/**
	 * Contains a default octave specification for use when the first note, rest, chord, etc. in a measure does not have an octave value specified.
	 */
	"@oct.default": v.optional(v.string()),
});

export type AttrOctaveDefaultData = v.InferOutput<
	typeof AttrOctaveDefaultSchema
>;
