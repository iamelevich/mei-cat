import { type Static, Type } from "@sinclair/typebox";
import { AttrCommonSchema } from "../attributes";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { TitleSchema } from "../shared/title";

/**
 * Container for title and responsibility meta-data.
 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
 */
export const TitleStmtSchema = Type.Composite([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			/**
			 * Title of a bibliographic entity.
			 */
			title: Type.Union([TitleSchema, Type.Array(TitleSchema)]),
			/**
			 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original;
			 * in an arrangement the musical substance remains essentially unchanged.
			 */
			arranger: Type.Optional(NotImplementedTagSchema),
			/**
			 * The name of the creator of the intellectual content of a non-musical, literary work.
			 */
			author: Type.Optional(NotImplementedTagSchema),
			/**
			 * The name of the creator of the intellectual content of a musical work.
			 */
			composer: Type.Optional(NotImplementedTagSchema),
			/**
			 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work,
			 * where the specialized elements for authors, editors, etc. do not suffice or do not apply.
			 */
			contributor: Type.Optional(NotImplementedTagSchema),
			/**
			 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
			 */
			editor: Type.Optional(NotImplementedTagSchema),
			/**
			 * Names of individuals, institutions, or organizations responsible for funding.
			 * Funders provide financial support for a project; they are distinct from sponsors,
			 * who provide intellectual support and authority.
			 */
			funder: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 */
			head: Type.Optional(NotImplementedTagSchema),
			/**
			 * Person or organization who is a writer of the text of an opera, oratorio, etc.
			 */
			librettist: Type.Optional(NotImplementedTagSchema),
			/**
			 * Person or organization who is a writer of the text of a song.
			 */
			lyricist: Type.Optional(NotImplementedTagSchema),
			/**
			 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes,
			 * responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
			 */
			respStmt: Type.Optional(NotImplementedTagSchema),
			/**
			 * Names of sponsoring individuals, organizations or institutions.
			 * Sponsors give their intellectual authority to a project; they are to be distinguished from funders,
			 * who provide the funding but do not necessarily take intellectual responsibility.
			 */
			sponsor: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);

export type TitleStmt = Static<typeof TitleStmtSchema>;
