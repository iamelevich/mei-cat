import * as v from "valibot";

/**
 * Attributes that provide horizontal alignment information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.horizontalAlign.html
 */
export const AttrHorizontalAlignSchema = v.object({
	/**
	 * Indicates horizontal alignment.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.horizontalAlign.html#halign
	 */
	"@halign": v.optional(v.union([v.literal("left"), v.literal("center"), v.literal("right"), v.literal("justify")])),
});

export type AttrHorizontalAlignData = v.InferOutput<typeof AttrHorizontalAlignSchema>;
