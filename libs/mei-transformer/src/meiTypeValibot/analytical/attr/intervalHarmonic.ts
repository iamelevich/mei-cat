import * as v from "valibot";

/**
 * Attributes that describe harmonic intervals..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.intervalHarmonic.html
 */
export const AttrIntervalHarmonicSchema = v.object({
	// Direct attributes
	/**
	 * Encodes the harmonic interval between pitches occurring at the same time.
	 */
	"@inth": v.optional(v.string()),
});

export type AttrIntervalHarmonicData = v.InferOutput<
	typeof AttrIntervalHarmonicSchema
>;
