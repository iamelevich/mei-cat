import * as v from "valibot";

/**
 * Attributes that provide filing information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
 */
export const AttrFilingSchema = v.object({
	/**
	 * Indicates the sort order of the filing element.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html#sortorder
	 */
	"@sortorder": v.optional(v.string()),
});

export type AttrFilingData = v.InferOutput<typeof AttrFilingSchema>;
