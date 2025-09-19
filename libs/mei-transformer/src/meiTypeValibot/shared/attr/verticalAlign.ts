import * as v from "valibot";

/**
 * Attributes that record vertical alignment..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalAlign.html
 */
export const AttrVerticalAlignSchema = v.object({
	// Direct attributes
	/**
	 * Records vertical alignment.
	 */
	"@valign": v.optional(v.string()),
});

export type AttrVerticalAlignData = v.InferOutput<
	typeof AttrVerticalAlignSchema
>;
