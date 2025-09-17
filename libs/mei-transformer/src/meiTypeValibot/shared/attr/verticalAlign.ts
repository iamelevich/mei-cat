import * as v from "valibot";

/**
 * Attributes that provide vertical alignment information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalAlign.html
 */
export const AttrVerticalAlignSchema = v.object({
	/**
	 * Indicates vertical alignment.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalAlign.html#valign
	 */
	"@valign": v.optional(v.union([v.literal("top"), v.literal("middle"), v.literal("bottom"), v.literal("baseline")])),
});

export type AttrVerticalAlignData = v.InferOutput<typeof AttrVerticalAlignSchema>;
