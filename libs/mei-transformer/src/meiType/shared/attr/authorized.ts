import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { AttrCanonicalSchema } from "./canonical";

/**
 * Attributes that describe the source of a controlled value.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
 */
export const AttrAuthorizedSchema = Type.Composite([
	Type.Object(
		{
			/**
			 * A name or label associated with a controlled vocabulary or other authoritative source for this element or its content. Value is plain text.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
			 */
			"@auth": Type.Optional(Type.String()),
			/**
			 * A web-accessible location of the controlled vocabulary or other authoritative source of identification or definition for this element or its content.
			 * This attribute may contain a complete URI or a partial URI which is completed by the value of the codedval attribute.
			 * Value conforms to data.URI.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
			 */
			"@auth.uri": Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
	AttrCanonicalSchema,
]);

export type AttrAuthorized = Static<typeof AttrAuthorizedSchema>;
