import * as v from "valibot";

/**
 * Attributes for selecting data..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dataSelecting.html
 */
export const AttrDataSelectingSchema = v.object({
	// Direct attributes
	/**
	 * XPath used to select data to which an element or a property applies.
	 */
	"@select": v.optional(v.string()),
});

export type AttrDataSelectingData = v.InferOutput<
	typeof AttrDataSelectingSchema
>;
