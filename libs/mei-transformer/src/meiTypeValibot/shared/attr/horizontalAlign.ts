import * as v from "valibot";

/**
 * Attributes that record horizontal alignment..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.horizontalAlign.html
 */
export const AttrHorizontalAlignSchema = v.object({
	// Direct attributes
	/**
	 * Records horizontal alignment.
	 */
	"@halign": v.optional(v.string()),
});

export type AttrHorizontalAlignData = v.InferOutput<
	typeof AttrHorizontalAlignSchema
>;
