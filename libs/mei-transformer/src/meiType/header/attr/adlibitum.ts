import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that describe a performance resource as ad libitum (optional).
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.adlibitum.html
 */
export const AttrAdlibitumSchema = Type.Object(
	{
		/**
		 * Marks a performance resource as ad libitum (optional).
		 * Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.adlibitum.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@adlib": Type.Optional(Type.Boolean()),
	},
	{ additionalProperties: false },
);

export type AttrAdlibitum = Static<typeof AttrAdlibitumSchema>;
