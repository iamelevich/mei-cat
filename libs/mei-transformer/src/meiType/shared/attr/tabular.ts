import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that record tabular display rendering information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabular.html
 */
export const AttrTabularSchema = Type.Object(
	{
		/**
		 * The number of columns spanned by this cell. Value is a positive integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabular.html#colspan
		 */
		"@colspan": Type.Optional(Type.Number()),

		/**
		 * The number of rows spanned by this cell. Value is a positive integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabular.html#rowspan
		 */
		"@rowspan": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

/**
 * Attributes that record tabular display rendering information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabular.html
 */
export type AttrTabular = Static<typeof AttrTabularSchema>;
