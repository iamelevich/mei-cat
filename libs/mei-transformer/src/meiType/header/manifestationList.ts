import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ManifestationSchema } from "../frbr/manifistation";
import { AttrCommonSchema } from "../shared/attr/common";
import { HeadSchema } from "../shared/head";

/**
 * A container for the descriptions of physical embodiments of an expression of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
 */
export const ManifestationListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * A bibliographic description of a physical embodiment of an expression of a work.
			 * @see https://music-encoding.org/guidelines/v5/elements/manifestation.html
			 */
			manifestation: Type.Union([
				ManifestationSchema,
				Type.Array(ManifestationSchema),
			]),
		},
		{ additionalProperties: false },
	),
]);

export type ManifestationList = Static<typeof ManifestationListSchema>;
