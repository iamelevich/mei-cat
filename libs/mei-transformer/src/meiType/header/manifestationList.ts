import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

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
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * A bibliographic description of a physical embodiment of an expression of a work.
			 * @see https://music-encoding.org/guidelines/v5/elements/manifestation.html
			 */
			manifestation: Type.Union([
				Type.Ref("manifestation"),
				Type.Array(Type.Ref("manifestation")),
			]),
		},
		{ additionalProperties: false },
	),
]);
