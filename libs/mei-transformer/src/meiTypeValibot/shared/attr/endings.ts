import * as v from "valibot";

/**
 * Attributes that record ending style information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.endings.html
 */
export const AttrEndingsSchema = v.object({
	// Direct attributes
	/**
	 * Describes where ending marks should be displayed.
	 */
	"@ending.rend": v.optional(v.string()),
});

export type AttrEndingsData = v.InferOutput<typeof AttrEndingsSchema>;
