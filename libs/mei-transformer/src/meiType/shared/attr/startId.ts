import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that identify the first element in a sequence of events.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startId.html
 */
export const AttrStartIdSchema = Type.Object(
	{
		/**
		 * Holds a reference to the first element in a sequence of events to which the feature applies.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startId.html#startid
		 */
		"@startid": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

/**
 * Attributes that identify the first element in a sequence of events.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startId.html
 */
export type AttrStartId = Static<typeof AttrStartIdSchema>;
