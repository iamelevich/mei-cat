import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.vis.html
 */
export const AttrSectionVisSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that staves begin again with this section.
	 */
	"@restart": v.optional(v.string()),
});

export type AttrSectionVisData = v.InferOutput<typeof AttrSectionVisSchema>;
