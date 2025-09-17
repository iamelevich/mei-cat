import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Groups information which describes the nature or topic of an entity.
 * @see https://music-encoding.org/guidelines/v5/elements/classDecls.html
 */
export const ClassDeclsSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
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
			 * Defines a typology either implicitly, by means of a bibliographic citation, or explicitly by a structured taxonomy.
			 * @see https://music-encoding.org/guidelines/v5/elements/taxonomy.html
			 */
			taxonomy: Type.Optional(
				Type.Union([Type.Ref("taxonomy"), Type.Array(Type.Ref("taxonomy"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
