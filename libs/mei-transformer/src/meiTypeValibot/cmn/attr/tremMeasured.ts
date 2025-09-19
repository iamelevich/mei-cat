import * as v from "valibot";

/**
 * Attributes that describe measured tremolandi..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tremMeasured.html
 */
export const AttrTremMeasuredSchema = v.object({
	// Direct attributes
	/**
	 * The performed duration of an individual note in a measured tremolo.
	 */
	"@unitdur": v.optional(v.string()),
});

export type AttrTremMeasuredData = v.InferOutput<typeof AttrTremMeasuredSchema>;
