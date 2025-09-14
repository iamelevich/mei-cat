import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that capture the appearance of the element's contents using MEI-defined descriptors.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textRendition.html
 */
export const AttrTextRenditionSchema = Type.Object(
	{
		/**
		 * Used to extend the values of the rend attribute.
		 * One or more values of datatype NMTOKEN, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textRendition.html#altrend
		 */
		"@altrend": Type.Optional(Type.String()),

		/**
		 * Captures the appearance of the element's contents using MEI-defined descriptors.
		 * One or more values from data.TEXTRENDITION, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textRendition.html#rend
		 */
		"@rend": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrTextRendition = Static<typeof AttrTextRenditionSchema>;
