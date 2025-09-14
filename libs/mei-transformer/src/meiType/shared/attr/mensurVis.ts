import { type Static, Type } from "@sinclair/typebox";

/**
 * Visual attributes for mensuration.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html
 */
export const AttrMensurVisSchema = Type.Object(
	{
		/**
		 * Specifies whether a dot is to be added to the base symbol.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html#dot
		 */
		"@dot": Type.Optional(Type.Boolean()),
		/**
		 * Indicates whether the base symbol is written vertically or horizontally.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html#form
		 */
		"@form": Type.Optional(
			Type.Union([Type.Literal("horizontal"), Type.Literal("vertical")]),
		),
		/**
		 * Describes the rotation or reflection of the base symbol.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html#orient
		 */
		"@orient": Type.Optional(Type.String()),
		/**
		 * The base symbol in the mensuration sign/time signature of mensural notation.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html#sign
		 */
		"@sign": Type.Optional(Type.String()),
		/**
		 * Indicates the number of slashes present.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html#slash
		 */
		"@slash": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

export type AttrMensurVis = Static<typeof AttrMensurVisSchema>;
