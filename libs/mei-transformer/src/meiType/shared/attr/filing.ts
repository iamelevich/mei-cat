import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes that deal with string filing characteristics.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
 */
export const AttrFilingSchema = Type.Object(
	{
		/**
		 * Holds the number of initial characters (such as those constituting an article or preposition) that should not be used for sorting a title or name.
		 * Value is a positive integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
		 */
		"@nonfiling": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

export type AttrFiling = Static<typeof AttrFilingSchema>;
