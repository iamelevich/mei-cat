import * as v from "valibot";

/**
 * Language attributes common to text elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
 */
export const AttrLangSchema = v.object({
	// Direct attributes
	/**
	 * Identifies the language of the element’s content. The values for this attribute are language 'tags' as defined in BCP 47. All language tags that make use of private use sub-tags must be documented in a corresponding language element in the MEI header whose id attribute is the same as the language tag’s value.
	 */
	"@xml:lang": v.optional(v.string()),
	/**
	 * Specifies the transliteration technique used.
	 */
	"@translit": v.optional(v.string()),
});

export type AttrLangData = v.InferOutput<typeof AttrLangSchema>;
