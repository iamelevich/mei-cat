import * as v from "valibot";

/**
 * Groups attributes that describe a numerical range..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html
 */
export const AttrRangingSchema = v.object({
	// Direct attributes
	/**
	 * Gives a minimum estimated value for an approximate measurement.
	 */
	"@atleast": v.optional(v.string()),
	/**
	 * Gives a maximum estimated value for an approximate measurement.
	 */
	"@atmost": v.optional(v.string()),
	/**
	 * Specifies the degree of statistical confidence (between zero and one) that a value falls within the range specified by min and max, or the proportion of observed values that fall within that range.
	 */
	"@confidence": v.optional(v.string()),
	/**
	 * Where the measurement summarizes more than one observation or a range of values, supplies the maximum value observed.
	 */
	"@max": v.optional(v.string()),
	/**
	 * Where the measurement summarizes more than one observation or a range of values, supplies the minimum value observed.
	 */
	"@min": v.optional(v.string()),
});

export type AttrRangingData = v.InferOutput<typeof AttrRangingSchema>;
