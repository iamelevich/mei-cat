import * as v from "valibot";

/**
 * Attributes for graced.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graced.html
 */
export const AttrGracedSchema = v.object({
	/**
	 * Marks a note or chord as a "grace" (without a definite performed duration) and records from which other note/chord it should "steal" time.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graced.html#grace
	 */
	"@grace": v.optional(v.string()),
	/**
	 * Records the amount of time to be "stolen" from a non-grace note/chord.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graced.html#grace.time
	 */
	"@grace.time": v.optional(v.string()),
});

export type AttrGracedData = v.InferOutput<typeof AttrGracedSchema>;
