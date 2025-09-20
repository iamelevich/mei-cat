import * as v from "valibot";

/**
 * Attributes that describe transposition..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.transposition.html
 */
export const AttrTranspositionSchema = v.object({
	// Direct attributes
	/**
	 * Records the amount of diatonic pitch shift, <abbr>e.g.</abbr>, C to C♯ = 0, C to D♭ = 1, necessary to calculate the sounded pitch from the written one.
	 */
	"@trans.diat": v.optional(v.string()),
	/**
	 * Records the amount of pitch shift in semitones, <abbr>e.g.</abbr>, C to C♯ = 1, C to D♭ = 1, necessary to calculate the sounded pitch from the written one.
	 */
	"@trans.semi": v.optional(v.string()),
});

export type AttrTranspositionData = v.InferOutput<
	typeof AttrTranspositionSchema
>;
