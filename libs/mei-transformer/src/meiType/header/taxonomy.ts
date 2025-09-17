import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Defines a typology either implicitly, by means of a bibliographic citation,
 * or explicitly by a structured taxonomy.
 * @see https://music-encoding.org/guidelines/v5/elements/taxonomy.html
 */
export const TaxonomySchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			// Zero or more model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// Optional model.biblLike (either bibl or biblStruct)
			/**
			 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(
				Type.Union([Type.Ref("bibl"), Type.Array(Type.Ref("bibl"))]),
			),
			/**
			 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
				Type.Union([
					Type.Ref("biblStruct"),
					Type.Array(Type.Ref("biblStruct")),
				]),
			),
			// Zero or more desc
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: Type.Optional(
				Type.Union([Type.Ref("desc"), Type.Array(Type.Ref("desc"))]),
			),
			// Zero or more category or taxonomy
			/**
			 * Contains an individual descriptive category in a user-defined taxonomy, possibly nested within a superordinate category.
			 * @see https://music-encoding.org/guidelines/v5/elements/category.html
			 */
			category: Type.Optional(
				Type.Union([Type.Ref("category"), Type.Array(Type.Ref("category"))]),
			),
			/**
			 * Defines a typology either implicitly by bibliographic citation or explicitly by a structured taxonomy; may be nested.
			 * @see https://music-encoding.org/guidelines/v5/elements/taxonomy.html
			 */
			taxonomy: Type.Optional(
				Type.Union([Type.Ref("taxonomy"), Type.Array(Type.Ref("taxonomy"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
