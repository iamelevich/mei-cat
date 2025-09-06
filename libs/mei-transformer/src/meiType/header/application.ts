import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";
import { NameSchema } from "../shared/name";
import { PSchema } from "../shared/p";
import { PtrSchema } from "../shared/ptr";
import { RefSchema } from "../shared/ref";

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
			name: Type.Union([NameSchema, Type.Array(NameSchema)]),
			/**
			 * One or more text phrases that form a logical prose passage (optional).
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),
			/**
			 * Defines a traversible pointer to another location (optional).
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(Type.Union([PtrSchema, Type.Array(PtrSchema)])),
			/**
			 * Defines a traversible reference to another location (optional).
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(Type.Union([RefSchema, Type.Array(RefSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type Application = Static<typeof ApplicationSchema>;
