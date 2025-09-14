import { type Static, Type } from "@sinclair/typebox";

/**
 * Basic attributes for performance resources.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.basic.html
 */
export const AttrPerfResBasicSchema = Type.Object(
	{
		/**
		 * Marks a performance resource as ad libitum (optional). Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.basic.html#adlib
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@adlib": Type.Optional(Type.Boolean()),
		/**
		 * Indicates the number of performers. Value is a positive integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.basic.html#count
		 */
		"@count": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

export type AttrPerfResBasic = Static<typeof AttrPerfResBasicSchema>;
