import { Type } from "typebox";

/**
 * Attributes that record vertical alignment.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalAlign.html
 */
export const AttrVerticalAlignSchema = Type.Object(
	{
		/**
		 * Records vertical alignment. Value conforms to data.VERTICALALIGNMENT.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalAlign.html#valign
		 */
		"@valign": Type.Optional(
			Type.Union([
				Type.Literal("top"),
				Type.Literal("middle"),
				Type.Literal("bottom"),
				Type.Literal("baseline"),
				Type.Literal("sub"),
				Type.Literal("super"),
			]),
		),
	},
	{ additionalProperties: false },
);
