import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { TitleSchema } from "../shared/title";

/**
 * Container for title and responsibility meta-data.
 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
 */
export const TitleStmtSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			// --- MEI.shared Component declarations that are shared between two or more modules ---
			/**
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: TitleSchema,
			/**
			 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original;
			 * in an arrangement the musical substance remains essentially unchanged.
			 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
			 */
			arranger: Type.Optional(NotImplementedTagSchema),
			/**
			 * The name of the creator of the intellectual content of a non-musical, literary work.
			 * @see https://music-encoding.org/guidelines/v5/elements/author.html
			 */
			author: Type.Optional(NotImplementedTagSchema),
			/**
			 * The name of the creator of the intellectual content of a musical work.
			 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
			 */
			composer: Type.Optional(NotImplementedTagSchema),
			/**
			 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work,
			 * where the specialized elements for authors, editors, etc. do not suffice or do not apply.
			 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
			 */
			contributor: Type.Optional(NotImplementedTagSchema),
			/**
			 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: Type.Optional(NotImplementedTagSchema),
			/**
			 * Names of individuals, institutions, or organizations responsible for funding.
			 * Funders provide financial support for a project; they are distinct from sponsors,
			 * who provide intellectual support and authority.
			 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
			 */
			funder: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(NotImplementedTagSchema),
			/**
			 * Person or organization who is a writer of the text of an opera, oratorio, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
			 */
			librettist: Type.Optional(NotImplementedTagSchema),
			/**
			 * Person or organization who is a writer of the text of a song.
			 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
			 */
			lyricist: Type.Optional(NotImplementedTagSchema),
			/**
			 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes,
			 * responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: Type.Optional(NotImplementedTagSchema),
			/**
			 * Names of sponsoring individuals, organizations or institutions.
			 * Sponsors give their intellectual authority to a project; they are to be distinguished from funders,
			 * who provide the funding but do not necessarily take intellectual responsibility.
			 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
			 */
			sponsor: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);

export type TitleStmt = Static<typeof TitleStmtSchema>;
