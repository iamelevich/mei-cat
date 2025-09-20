import * as v from "valibot";

/**
 * Attributes for marking the presence of a slur..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slurPresent.html
 */
export const AttrSlurPresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that this element participates in a slur. If visual information about the slur needs to be recorded, then a <gi scheme="MEI">slur</gi> element should be employed.
	 */
	"@slur": v.optional(v.string()),
});

export type AttrSlurPresentData = v.InferOutput<typeof AttrSlurPresentSchema>;
