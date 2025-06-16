import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes which can be used to classify features.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
 */
export const AttrClassedSchema = Type.Object(
	{
		/**
		 * Contains one or more URIs which denote classification terms that apply to the entity bearing this attribute.
		 * One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
		 */
		"@class": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrClassed = Static<typeof AttrClassedSchema>;
