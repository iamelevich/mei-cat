import * as v from "valibot";

/**
 * Attributes that provide for description of intervallic content..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.intervalMelodic.html
 */
export const AttrIntervalMelodicSchema = v.object({
	// Direct attributes
	/**
	 * Encodes the melodic interval from the previous pitch. The value may be a general directional indication (u, d, s, etc.), an indication of diatonic interval direction, quality, and size, or a precise numeric value in half steps.
	 */
	"@intm": v.optional(v.string()),
});

export type AttrIntervalMelodicData = v.InferOutput<
	typeof AttrIntervalMelodicSchema
>;
