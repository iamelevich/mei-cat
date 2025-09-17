import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

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
			 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
			 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
			 */
			arranger: Type.Optional(
				Type.Union([Type.Ref("arranger"), Type.Array(Type.Ref("arranger"))]),
			),
			/**
			 * The name of the creator of the intellectual content of a non-musical, literary work.
			 * @see https://music-encoding.org/guidelines/v5/elements/author.html
			 */
			author: Type.Optional(
				Type.Union([Type.Ref("author"), Type.Array(Type.Ref("author"))]),
			),
			/**
			 * The name of the creator of the intellectual content of a musical work.
			 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
			 */
			composer: Type.Optional(
				Type.Union([Type.Ref("composer"), Type.Array(Type.Ref("composer"))]),
			),
			/**
			 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
			 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
			 */
			contributor: Type.Optional(
				Type.Union([
					Type.Ref("contributor"),
					Type.Array(Type.Ref("contributor")),
				]),
			),
			/**
			 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: Type.Optional(
				Type.Union([Type.Ref("editor"), Type.Array(Type.Ref("editor"))]),
			),
			/**
			 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
			 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
			 */
			funder: Type.Optional(
				Type.Union([Type.Ref("funder"), Type.Array(Type.Ref("funder"))]),
			),
			/**
			 * Person or organization who is a writer of the text of an opera, oratorio, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
			 */
			librettist: Type.Optional(
				Type.Union([
					Type.Ref("librettist"),
					Type.Array(Type.Ref("librettist")),
				]),
			),
			/**
			 * Person or organization who is a writer of the text of a song.
			 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
			 */
			lyricist: Type.Optional(
				Type.Union([Type.Ref("lyricist"), Type.Array(Type.Ref("lyricist"))]),
			),
			/**
			 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
			 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
			 */
			sponsor: Type.Optional(
				Type.Union([Type.Ref("sponsor"), Type.Array(Type.Ref("sponsor"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
