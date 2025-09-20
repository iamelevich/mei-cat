import * as v from "valibot";

/**
 * Attributes that capture music font name and size..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.notationStyle.html
 */
export const AttrNotationStyleSchema = v.object({
	// Direct attributes
	/**
	 * Sets the default music font name.
	 */
	"@music.name": v.optional(v.string()),
	/**
	 * Sets the default music font size.
	 */
	"@music.size": v.optional(v.string()),
});

export type AttrNotationStyleData = v.InferOutput<
	typeof AttrNotationStyleSchema
>;
