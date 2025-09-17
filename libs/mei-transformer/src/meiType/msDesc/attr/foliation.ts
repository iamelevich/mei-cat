import { Type } from "typebox";

/**
 * Attributes that describe foliation schemes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliation.scheme.html
 */
export const AttrFoliationSchemeSchema = Type.Object(
	{
		/**
		 * Identifies the foliation scheme in terms of which the location is being specified by pointing to some foliation element defining it, or to some other equivalent resource.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.foliation.scheme.html#scheme
		 */
		"@scheme": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
