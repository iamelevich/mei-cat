import { Type } from "typebox";

/**
 * Attributes for capturing momentary pitch inflection.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accidental.html
 */
export const AttrAccidentalSchema = Type.Object(
	{
		/**
		 * Captures a written accidental.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accidental.html#accid
		 */
		"@accid": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
