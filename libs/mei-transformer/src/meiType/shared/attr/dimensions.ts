import { Type } from "typebox";

/**
 * Attributes for dimensions (height and width).
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dimensions.html
 */
export const AttrDimensionsSchema = Type.Object(
	{
		/**
		 * Measurement of the vertical dimension of an entity.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dimensions.html#height
		 */
		"@height": Type.Optional(Type.String()),
		/**
		 * Measurement of the horizontal dimension of an entity.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dimensions.html#width
		 */
		"@width": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
