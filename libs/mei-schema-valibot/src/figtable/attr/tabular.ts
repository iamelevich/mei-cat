import * as v from "valibot";

/**
 * Attributes shared by table cells..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabular.html
 */
export const AttrTabularSchema = v.object({
	// Direct attributes
	/**
	 * The number of columns spanned by this cell.
	 */
	"@colspan": v.optional(v.string()),
	/**
	 * The number of rows spanned by this cell.
	 */
	"@rowspan": v.optional(v.string()),
});

export type AttrTabularData = v.InferOutput<typeof AttrTabularSchema>;
