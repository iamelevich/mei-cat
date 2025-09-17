import { Type } from "typebox";

/**
 * Attributes that identify the hand responsible for some aspect of the text's creation, revision, or encoding.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.handIdent.html
 */
export const AttrHandIdentSchema = Type.Object(
	{
		/**
		 * Signifies the hand responsible for an action.
		 * The value must be the ID of a hand element declared in the header.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.handIdent.html#hand
		 */
		"@hand": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
