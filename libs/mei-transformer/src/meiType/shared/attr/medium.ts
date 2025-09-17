import { Type } from "typebox";

export const AttrMediumSchema = Type.Object(
	{
		/**
		 * Describes the writing medium. Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.medium.html
		 */
		"@medium": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
