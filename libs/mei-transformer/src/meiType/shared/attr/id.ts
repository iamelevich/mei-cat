import { Type } from "typebox";

/**
 * Attributes that uniquely identify an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
 */
export const AttrIdSchema = Type.Object(
	{
		/**
		 * Regularizes the naming of an element and thus facilitates building links between it and other resources.
		 * Each id attribute within a document must have a unique value. Value is a valid xml:id.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
		 */
		"@xml:id": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
