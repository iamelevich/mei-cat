import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes for coordinate positioning.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html
 */
export const AttrCoordinatedSchema = Type.Object(
	{
		/**
		 * Indicates the lower-right corner x coordinate. Value is a positive integer, including 0.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#lrx
		 */
		"@lrx": Type.Optional(Type.Number()),

		/**
		 * Indicates the lower-right corner y coordinate. Value is a positive integer, including 0.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#lry
		 */
		"@lry": Type.Optional(Type.Number()),

		/**
		 * Indicates the amount by which the contents of this element have been rotated clockwise or, if applicable, how the orientation of the element self should be interpreted, with respect to the normal orientation of the parent surface. The orientation is expressed in arc degrees. Value conforms to data.DEGREES.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#rotate
		 */
		"@rotate": Type.Optional(Type.Number()),

		/**
		 * Indicates the upper-left corner x coordinate. Value is a positive integer, including 0.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#ulx
		 */
		"@ulx": Type.Optional(Type.Number()),

		/**
		 * Indicates the upper-left corner y coordinate. Value is a positive integer, including 0.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html#uly
		 */
		"@uly": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

/**
 * Attributes for coordinate positioning.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html
 */
export type AttrCoordinated = Static<typeof AttrCoordinatedSchema>;
