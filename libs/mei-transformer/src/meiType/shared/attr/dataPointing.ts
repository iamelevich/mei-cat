import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes that link metadata elements to one or more data-containing elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dataPointing.html
 */
export const AttrDataPointingSchema = Type.Object(
	{
		/**
		 * Used to link metadata elements to one or more data-containing elements.
		 * One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dataPointing.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
		 */
		data: Type.Optional(Type.String()),
	},
	{
		additionalProperties: false,
	},
);

export type AttrDataPointing = Static<typeof AttrDataPointingSchema>;
