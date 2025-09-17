import * as v from "valibot";

/**
 * Attributes that provide text rendition information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textRendition.html
 */
export const AttrTextRenditionSchema = v.object({
	/**
	 * Indicates the function of the text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textRendition.html#rend
	 */
	"@rend": v.optional(v.string()),

	/**
	 * Indicates the function of the text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textRendition.html#rendition
	 */
	"@rendition": v.optional(v.string()),
});

export type AttrTextRenditionData = v.InferOutput<typeof AttrTextRenditionSchema>;
