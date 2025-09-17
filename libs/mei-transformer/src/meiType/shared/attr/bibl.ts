import { Type } from "typebox";

/**
 * Attributes used to supply a bibliographic reference to an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
 */
export const AttrBiblSchema = Type.Object(
	{
		/**
		 * Contains a reference to a field or element in another descriptive encoding system to which this MEI element is comparable. Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
		 */
		"@analog": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
