import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes specific to name elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.name.html
 */
export const AttrNameSchema = Type.Object(
	{
		/**
		 * Used to record a pointer to the regularized form of the name elsewhere in the document.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.name.html
		 */
		"@nymref": Type.Optional(Type.String()),
		/**
		 * Used to specify further information about the entity referenced by this name, for example, the occupation of a person or the status of a place.
		 * Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.name.html
		 */
		"@role": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrName = Static<typeof AttrNameSchema>;
