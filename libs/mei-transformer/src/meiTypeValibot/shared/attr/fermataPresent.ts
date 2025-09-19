import * as v from "valibot";

/**
 * Attributes indicating the attachment of a fermata to the feature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermataPresent.html
 */
export const AttrFermataPresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the attachment of a fermata to this element. If visual information about the fermata needs to be recorded, then a <gi scheme="MEI">fermata</gi> element should be employed instead.
	 */
	"@fermata": v.optional(v.string()),
});

export type AttrFermataPresentData = v.InferOutput<
	typeof AttrFermataPresentSchema
>;
