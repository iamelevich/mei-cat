import * as v from "valibot";

/**
 * Attributes that address whitespace processing..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.whitespace.html
 */
export const AttrWhitespaceSchema = v.object({
	// Direct attributes
	/**
	 * Allows one to signal to an application whether an element’s white space is "significant". The behavior of xml:space cascades to all descendant elements, but it can be turned off locally by setting the xml:space attribute to the value <val>default</val>.
	 */
	"@space": v.optional(v.string()),
});

export type AttrWhitespaceData = v.InferOutput<typeof AttrWhitespaceSchema>;
