import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes used to supply a number-like designation for an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
 */
export const AttrNNumberLikeSchema = Type.Object(
	{
		/**
		 * Provides a number-like designation that indicates an element's position in a sequence of similar elements.
		 * May not contain space characters.
		 * Value conforms to data.WORD.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.WORD.html
		 */
		"@n": Type.Optional(
			Type.String({
				pattern: "^(\\p{L}|\\p{N}|\\p{P}|\\p{S})*$",
			}),
		),
	},
	{ additionalProperties: false },
);

export type AttrNNumberLike = Static<typeof AttrNNumberLikeSchema>;
