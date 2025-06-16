import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes that associate a feature corresponding with all or part of an image.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
 */
export const AttrFacsimileSchema = Type.Object(
	{
		/**
		 * Points to one or more images, portions of an image, or surfaces which correspond to the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
		 */
		"@facs": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrFacsimile = Static<typeof AttrFacsimileSchema>;
