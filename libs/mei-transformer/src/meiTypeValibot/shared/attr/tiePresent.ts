import * as v from "valibot";

/**
 * Attributes that indicate the presence of a tie..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tiePresent.html
 */
export const AttrTiePresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that this element participates in a tie. If visual information about the tie needs to be recorded, then a <gi scheme="MEI">tie</gi> element should be employed.
	 */
	"@tie": v.optional(v.string()),
});

export type AttrTiePresentData = v.InferOutput<typeof AttrTiePresentSchema>;
