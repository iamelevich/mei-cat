import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { BiblScopeSchema } from "../shared/biblScope";
import { ContentsSchema } from "../shared/contents";
import { HeadSchema } from "../shared/head";
import { IdentifierSchema } from "../shared/identifier";
import { RespStmtSchema } from "../shared/respStmt";
import { TitleSchema } from "../shared/title";

/**
 * Groups information about the series, if any, to which a publication belongs.
 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
 */
export const SeriesStmtSchema = Type.Recursive((Self) =>
	Type.Intersect([
		StandardTagSchema,
		AttrCommonSchema,
		AttrBiblSchema,
		Type.Object(
			{
				/**
				 * Contains any heading, for example, the title of a section of text, or the heading of a list.
				 * @see https://music-encoding.org/guidelines/v5/elements/head.html
				 */
				head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
				/**
				 * Title of a bibliographic entity.
				 * @see https://music-encoding.org/guidelines/v5/elements/title.html
				 */
				title: Type.Union([TitleSchema, Type.Array(TitleSchema)]),
				/**
				 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes, responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
				 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
				 */
				respStmt: Type.Optional(
					Type.Union([RespStmtSchema, Type.Array(RespStmtSchema)]),
				),
				/**
				 * An alpha-numeric string that establishes the identity of the described material.
				 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
				 */
				identifier: Type.Optional(
					Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
				),
				/**
				 * Defines the scope of a bibliographic reference, for example as a list of page numbers, or a named subdivision of a larger work.
				 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
				 */
				biblScope: Type.Optional(
					Type.Union([BiblScopeSchema, Type.Array(BiblScopeSchema)]),
				),
				/**
				 * List of the material contained within a resource.
				 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
				 */
				contents: Type.Optional(
					Type.Union([ContentsSchema, Type.Array(ContentsSchema)]),
				),
				/**
				 * Groups information about the series, if any, to which a publication belongs.
				 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
				 */
				seriesStmt: Type.Optional(Type.Union([Self, Type.Array(Self)])),
			},
			{ additionalProperties: false },
		),
	]),
);

export type SeriesStmt = Static<typeof SeriesStmtSchema>;
