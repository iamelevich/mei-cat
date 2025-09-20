import * as v from "valibot";

/**
 * Attributes specifying whether a feature is contemporary or historical..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.contemporary.html
 */
export const AttrContemporarySchema = v.object({
	// Direct attributes
	/**
	 *
	 */
	"@contemporary": v.optional(v.string()),
});

export type AttrContemporaryData = v.InferOutput<typeof AttrContemporarySchema>;
