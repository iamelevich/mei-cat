import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Groups information about the series, if any, to which a publication belongs.
 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
 */
export const SeriesStmtSchema = Type.Intersect([
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
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Union([Type.Ref("title"), Type.Array(Type.Ref("title"))]),
			/**
			 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes, responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: Type.Optional(
				Type.Union([Type.Ref("respStmt"), Type.Array(Type.Ref("respStmt"))]),
			),
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([
					Type.Ref("identifier"),
					Type.Array(Type.Ref("identifier")),
				]),
			),
			/**
			 * Defines the scope of a bibliographic reference, for example as a list of page numbers, or a named subdivision of a larger work.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
			 */
			biblScope: Type.Optional(
				Type.Union([Type.Ref("biblScope"), Type.Array(Type.Ref("biblScope"))]),
			),
			/**
			 * List of the material contained within a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: Type.Optional(
				Type.Union([Type.Ref("contents"), Type.Array(Type.Ref("contents"))]),
			),
			/**
			 * Groups information about the series, if any, to which a publication belongs.
			 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
			 */
			seriesStmt: Type.Optional(
				Type.Union([
					Type.Ref("seriesStmt"),
					Type.Array(Type.Ref("seriesStmt")),
				]),
			),
		},
		{ additionalProperties: false },
	),
]);
