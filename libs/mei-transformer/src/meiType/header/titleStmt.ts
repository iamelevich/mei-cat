import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ArrangerSchema } from "../shared/arranger";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AuthorSchema } from "../shared/author";
import { ComposerSchema } from "../shared/composer";
import { ContributorSchema } from "../shared/contributor";
import { EditorSchema } from "../shared/editor";
import { FunderSchema } from "../shared/funder";
import { HeadSchema } from "../shared/head";
import { LibrettistSchema } from "../shared/librettist";
import { LyricistSchema } from "../shared/lyricist";
import { RespStmtSchema } from "../shared/respStmt";
import { SponsorSchema } from "../shared/sponsor";
import { TitleSchema } from "../shared/title";

/**
 * Container for title and responsibility meta-data.
 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
 */
export const TitleStmtSchema = Type.Intersect([
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
			 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
			 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
			 */
			arranger: Type.Optional(
				Type.Union([ArrangerSchema, Type.Array(ArrangerSchema)]),
			),
			/**
			 * The name of the creator of the intellectual content of a non-musical, literary work.
			 * @see https://music-encoding.org/guidelines/v5/elements/author.html
			 */
			author: Type.Optional(
				Type.Union([AuthorSchema, Type.Array(AuthorSchema)]),
			),
			/**
			 * The name of the creator of the intellectual content of a musical work.
			 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
			 */
			composer: Type.Optional(
				Type.Union([ComposerSchema, Type.Array(ComposerSchema)]),
			),
			/**
			 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
			 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
			 */
			contributor: Type.Optional(
				Type.Union([ContributorSchema, Type.Array(ContributorSchema)]),
			),
			/**
			 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: Type.Optional(
				Type.Union([EditorSchema, Type.Array(EditorSchema)]),
			),
			/**
			 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
			 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
			 */
			funder: Type.Optional(
				Type.Union([FunderSchema, Type.Array(FunderSchema)]),
			),
			/**
			 * Person or organization who is a writer of the text of an opera, oratorio, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
			 */
			librettist: Type.Optional(
				Type.Union([LibrettistSchema, Type.Array(LibrettistSchema)]),
			),
			/**
			 * Person or organization who is a writer of the text of a song.
			 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
			 */
			lyricist: Type.Optional(
				Type.Union([LyricistSchema, Type.Array(LyricistSchema)]),
			),
			/**
			 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
			 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
			 */
			sponsor: Type.Optional(
				Type.Union([SponsorSchema, Type.Array(SponsorSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type TitleStmt = Static<typeof TitleStmtSchema>;
