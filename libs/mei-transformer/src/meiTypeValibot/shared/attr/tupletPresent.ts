import * as v from "valibot";

/**
 * Attributes for indicating the presence of a tuplet..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletPresent.html
 */
export const AttrTupletPresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that this feature participates in a tuplet. If visual information about the tuplet needs to be recorded, then a <gi scheme="MEI">tuplet</gi> element should be employed.
	 */
	"@tuplet": v.optional(v.string()),
});

export type AttrTupletPresentData = v.InferOutput<
	typeof AttrTupletPresentSchema
>;
