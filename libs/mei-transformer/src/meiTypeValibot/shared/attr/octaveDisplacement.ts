import * as v from "valibot";

/**
 * Attributes describing the amount and direction of octave displacement..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octaveDisplacement.html
 */
export const AttrOctaveDisplacementSchema = v.object({
	// Direct attributes
	/**
	 * Records the amount of octave displacement.
	 */
	"@dis": v.optional(v.string()),
	/**
	 * Records the direction of octave displacement.
	 */
	"@dis.place": v.optional(v.string()),
});

export type AttrOctaveDisplacementData = v.InferOutput<
	typeof AttrOctaveDisplacementSchema
>;
