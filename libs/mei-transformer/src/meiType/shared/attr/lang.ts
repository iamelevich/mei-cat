import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes used to specify the language of the element's content.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
 */
export const AttrLangSchema = Type.Object(
	{
		/**
		 * Identifies the language of the element's content.
		 * The values for this attribute are language 'tags' as defined in BCP 47.
		 * All language tags that make use of private use sub-tags must be documented in a corresponding language element in the
		 * MEI header whose id attribute is the same as the language tag's value.
		 * Value is a language.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
		 * @see https://www.w3.org/TR/xmlschema11-2/#language
		 */
		"@xml:lang": Type.Optional(
			Type.String({
				pattern: "^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$",
			}),
		),

		/**
		 * Specifies the transliteration technique used. Value is a NMTOKEN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
		 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
		 */
		"@translit": Type.Optional(
			Type.String({
				pattern: "^\\c+$",
			}),
		),
	},
	{ additionalProperties: false },
);

/**
 * Attributes used to specify the language of the element's content.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
 */
export type AttrLang = Static<typeof AttrLangSchema>;
