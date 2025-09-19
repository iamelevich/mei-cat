import * as v from "valibot";

/**
 * Attributes for marking the presence of an ornament..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornamPresent.html
 */
export const AttrOrnamPresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that this element has an attached ornament. If visual information about the ornament is needed, then one of the elements that represents an ornament (mordent, trill, or turn) should be employed.
	 */
	"@ornam": v.optional(v.string()),
});

export type AttrOrnamPresentData = v.InferOutput<typeof AttrOrnamPresentSchema>;
