import * as v from "valibot";

/**
 * Attributes whether an element is performed "attacca"..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacking.html
 */
export const AttrAttackingSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that the performance of the next musical division should begin immediately following this one.
	 */
	"@attacca": v.optional(v.string()),
});

export type AttrAttackingData = v.InferOutput<typeof AttrAttackingSchema>;
