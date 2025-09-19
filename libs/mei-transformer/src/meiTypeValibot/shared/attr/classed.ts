import * as v from "valibot";

/**
 * Attributes which can be used to classify features..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
 */
export const AttrClassedSchema = v.object({
	// Direct attributes
	/**
	 * Contains one or more URIs which denote classification terms that apply to the entity bearing this attribute.
	 */
	"@class": v.optional(v.string()),
});

export type AttrClassedData = v.InferOutput<typeof AttrClassedSchema>;
