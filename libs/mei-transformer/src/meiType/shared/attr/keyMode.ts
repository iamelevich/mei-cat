import { Type } from "typebox";

/**
 * Attributes for describing key mode.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyMode.html
 */
export const AttrKeyModeSchema = Type.Object(
	{
		/**
		 * Indicates major, minor, or other tonality.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyMode.html#mode
		 */
		"@mode": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
