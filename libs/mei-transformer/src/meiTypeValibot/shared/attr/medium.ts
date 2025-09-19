import * as v from "valibot";

/**
 * Attributes describing a writing medium, such as pencil or ink..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.medium.html
 */
export const AttrMediumSchema = v.object({
	// Direct attributes
	/**
	 * Describes the writing medium.
	 */
	"@medium": v.optional(v.string()),
});

export type AttrMediumData = v.InferOutput<typeof AttrMediumSchema>;
