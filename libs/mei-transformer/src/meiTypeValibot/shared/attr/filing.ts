import * as v from "valibot";

/**
 * Attributes that deal with string filing characteristics..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
 */
export const AttrFilingSchema = v.object({
	// Direct attributes
	/**
	 * Holds the number of initial characters (such as those constituting an article or preposition) that should not be used for sorting a title or name.
	 */
	"@nonfiling": v.optional(v.string()),
});

export type AttrFilingData = v.InferOutput<typeof AttrFilingSchema>;
