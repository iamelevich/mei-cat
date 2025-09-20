import * as v from "valibot";

/**
 * Attributes that indicate whether to render a repeat symbol or the source material to which it refers..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.expandable.html
 */
export const AttrExpandableSchema = v.object({
	// Direct attributes
	/**
	 * Indicates whether to render a repeat symbol or the source material to which it refers. A value of 'true' renders the source material, while 'false' displays the repeat symbol.
	 */
	"@expand": v.optional(v.string()),
});

export type AttrExpandableData = v.InferOutput<typeof AttrExpandableSchema>;
