import * as v from "valibot";

/**
 * Attributes that permit total duration to be represented by multiple values..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.additive.html
 */
export const AttrDurationAdditiveSchema = v.object({
	// Direct attributes
	/**
	 * When a duration cannot be represented as a single power-of-two value, multiple space-separated values that add up to the total duration may be used.
	 */
	"@dur": v.optional(v.string()),
});

export type AttrDurationAdditiveData = v.InferOutput<
	typeof AttrDurationAdditiveSchema
>;
