import { Type } from "typebox";

/**
 * Attributes that record horizontal alignment.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.horizontalAlign.html
 */
export const AttrHorizontalAlignSchema = Type.Object(
	{
		/**
		 * Records horizontal alignment. Value conforms to data.HORIZONTALALIGNMENT.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.horizontalAlign.html#halign
		 */
		"@halign": Type.Optional(
			Type.Union([
				Type.Literal("left"),
				Type.Literal("center"),
				Type.Literal("right"),
				Type.Literal("justify"),
				Type.Literal("justify-all"),
				Type.Literal("start"),
				Type.Literal("end"),
			]),
		),
	},
	{ additionalProperties: false },
);
