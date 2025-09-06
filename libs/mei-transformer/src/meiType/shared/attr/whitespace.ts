import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { AttrClassedSchema } from "./classed";

/**
 * Attributes that address whitespace processing.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.whitespace.html
 */
export const AttrWhitespaceSchema = Type.Intersect([
	Type.Object(
		{
			/**
			 * Allows one to signal to an application whether an element’s white space is "significant". The behavior of xml:space cascades to all descendant elements, but it can be turned off locally by setting the xml:space attribute to the value default. Allowed values are: "default" (Allows the application to handle white space as necessary. Not including an xml:space attribute produces the same result as using the default value.), "preserve" (Instructs the application to maintain white space "as-is", suggesting that it might have meaning.)
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.whitespace.html
			 */
			"@xml:space": Type.Optional(
				Type.Union([Type.Literal("default"), Type.Literal("preserve")]),
			),
		},
		{ additionalProperties: false },
	),
	AttrClassedSchema,
]);

export type AttrWhitespace = Static<typeof AttrWhitespaceSchema>;
