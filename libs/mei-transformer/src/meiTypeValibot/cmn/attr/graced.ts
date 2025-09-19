import * as v from "valibot";

/**
 * Attributes that mark a note or chord as a "grace", how it should "steal" time, and how much time should be allotted to the grace note/chord..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graced.html
 */
export const AttrGracedSchema = v.object({
	// Direct attributes
	/**
	 * Marks a note or chord as a "grace" (without a definite performed duration) and records from which other note/chord it should "steal" time.
	 */
	"@grace": v.optional(v.string()),
	/**
	 * Records the amount of time to be "stolen" from a non-grace note/chord.
	 */
	"@grace.time": v.optional(v.string()),
});

export type AttrGracedData = v.InferOutput<typeof AttrGracedSchema>;
