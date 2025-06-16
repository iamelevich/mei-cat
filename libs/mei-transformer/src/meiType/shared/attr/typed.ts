import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { AttrClassedSchema } from "./classed";

/**
 * Attributes which can be used to classify features.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
 */
export const AttrTypedSchema = Type.Intersect([
	Type.Object(
		{
			/**
			 * Designation which characterizes the element in some sense, using any convenient classification scheme or typology that employs single-token labels.
			 * One or more values of datatype NMTOKEN, separated by spaces.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
			 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
			 */
			"@type": Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
	AttrClassedSchema,
]);

export type AttrTyped = Static<typeof AttrTypedSchema>;
