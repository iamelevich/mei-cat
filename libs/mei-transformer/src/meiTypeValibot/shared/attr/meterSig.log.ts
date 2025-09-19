import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.log.html
 */
export const AttrMeterSigLogSchema = v.object({
	// Direct attributes
	/**
	 * Captures the number of beats in a measure, that is, the top number of the meter signature. It must contain a decimal number or an expression that evaluates to a decimal number, such as 2+3 or 3*2.
	 */
	"@count": v.optional(v.string()),
	/**
	 * Indicates the use of a meter symbol instead of a numeric meter signature, that is, 'C' for common time or 'C' with a slash for cut time.
	 */
	"@sym": v.optional(v.string()),
	/**
	 * Contains the number indicating the beat unit, that is, the bottom number of the meter signature.
	 */
	"@unit": v.optional(v.string()),
});

export type AttrMeterSigLogData = v.InferOutput<typeof AttrMeterSigLogSchema>;
