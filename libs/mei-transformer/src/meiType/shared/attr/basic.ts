import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { AttrIdSchema } from "./id";

/**
 * Attributes that form the basis of the att.common class.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
 */
export const AttrBasicSchema = Type.Composite([
	Type.Object(
		{
			/**
			 * Provides a base URI reference with which applications can resolve relative URI references into absolute URI references.
			 * Value conforms to data.URI.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
			 */
			"@xml:base": Type.Optional(
				Type.String({
					format: "uri",
				}),
			),
		},
		{ additionalProperties: false },
	),
	AttrIdSchema,
]);

/**
 * Attributes that form the basis of the att.common class.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
 */
export type AttrBasic = Static<typeof AttrBasicSchema>;
