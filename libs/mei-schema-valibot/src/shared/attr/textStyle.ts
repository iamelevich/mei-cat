import * as v from "valibot";

/**
 * Attributes that describe default text typography..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textStyle.html
 */
export const AttrTextStyleSchema = v.object({
	// Direct attributes
	/**
	 * Provides a default value for the font family name of text (other than lyrics) when this information is not provided on the individual elements.
	 */
	"@text.fam": v.optional(v.string()),
	/**
	 * Provides a default value for the font name of text (other than lyrics) when this information is not provided on the individual elements.
	 */
	"@text.name": v.optional(v.string()),
	/**
	 * Provides a default value for the font size of text (other than lyrics) when this information is not provided on the individual elements.
	 */
	"@text.size": v.optional(v.string()),
	/**
	 * Provides a default value for the font style of text (other than lyrics) when this information is not provided on the individual elements.
	 */
	"@text.style": v.optional(v.string()),
	/**
	 * Provides a default value for the font weight for text (other than lyrics) when this information is not provided on the individual elements.
	 */
	"@text.weight": v.optional(v.string()),
});

export type AttrTextStyleData = v.InferOutput<typeof AttrTextStyleSchema>;
