import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";

/**
 * Provides information about an application which has acted upon the current document.
 * @see https://music-encoding.org/guidelines/v5/elements/application.html
 */
export const ApplicationSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	Type.Object(
		{
			/**
			 * Supplies a version number for an application, independent of its identifier or display name.
			 * @see https://music-encoding.org/guidelines/v5/elements/application.html
			 */
			"@version": Type.Optional(Type.String()),
			/**
			 * Proper noun or noun phrase (required - one or more).
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Union([Type.Ref("name"), Type.Array(Type.Ref("name"))]),
			/**
			 * One or more text phrases that form a logical prose passage (optional).
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),
			/**
			 * Defines a traversible pointer to another location (optional).
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(
				Type.Union([Type.Ref("ptr"), Type.Array(Type.Ref("ptr"))]),
			),
			/**
			 * Defines a traversible reference to another location (optional).
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(
				Type.Union([Type.Ref("ref"), Type.Array(Type.Ref("ref"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
