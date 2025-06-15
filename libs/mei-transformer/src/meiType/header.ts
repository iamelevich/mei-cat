/**
 * @fileoverview Metadata header component declarations.
 * @see https://music-encoding.org/guidelines/v5/modules/MEI.header.html
 */
import { Type } from "@sinclair/typebox";
import type { Static } from "@sinclair/typebox";
import {
	AttrBasicSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLabeledSchema,
	AttrLangSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
} from "./attributes";
import { NotImplementedTagSchema, StandardTagSchema } from "./common";
import { TitleSchema } from "./shared";

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

/**
 * Contains a full bibliographic description of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
 */
export const FileDescSchema = Type.Composite([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			titleStmt: TitleStmtSchema,
			editionStmt: Type.Optional(NotImplementedTagSchema),
			notesStmt: Type.Optional(NotImplementedTagSchema),
			pubStmt: Type.Optional(NotImplementedTagSchema),
			seriesStmt: Type.Optional(NotImplementedTagSchema),
			sourceDesc: Type.Optional(NotImplementedTagSchema),
			extend: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);

export type FileDesc = Static<typeof FileDescSchema>;

/**
 * Supplies the descriptive and declarative metadata prefixed to every MEI-conformant text.
 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
 */
export const MeiHeadSchema = Type.Composite([
	StandardTagSchema,
	AttrBasicSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
	AttrLangSchema,
	AttrLabeledSchema,
	AttrBiblSchema,
	Type.Object({
		/**
		 * Specifies the kind of document to which the header is attached, for example whether it is a corpus or individual text.
		 * Allowed values are:
		 *   "music" (Header is attached to a music document.),
		 *   "corpus" (Header is attached to a corpus.),
		 *   "independent" (Header is independent; not attached to either a music or a corpus document.)
		 */
		"@type": Type.Optional(
			Type.Union([
				Type.Literal("music"),
				Type.Literal("corpus"),
				Type.Literal("independent"),
			]),
		),
		/**
		 * A container for the descriptions of physical embodiments of an expression of a work.
		 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
		 */
		manifestationList: NotImplementedTagSchema,
		/**
		 * May contain a bibliographic identifier that does not fit within the meiHead element's id attribute,
		 * for example because the identifier does not fit the definition of an XML id or because multiple identifiers are needed.
		 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
		 */
		altId: Type.Optional(NotImplementedTagSchema),
		/**
		 * Contains a full bibliographic description of the MEI file.
		 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
		 */
		fileDesc: FileDescSchema,
		/**
		 * Documents the relationship between an electronic file and the source or sources from which it was derived as well
		 * as applications used in the encoding/editing process.
		 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
		 */
		encodingDesc: Type.Optional(NotImplementedTagSchema),
		/**
		 * Grouping mechanism for information describing non-bibliographic aspects of a text.
		 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
		 */
		workList: Type.Optional(NotImplementedTagSchema),
		/**
		 * Container for information about alterations that have been made to an MEI file.
		 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
		 */
		revisionDesc: Type.Optional(NotImplementedTagSchema),
		/**
		 * Provides a container element for non-MEI metadata formats.
		 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
		 */
		extMeta: Type.Optional(NotImplementedTagSchema),
	}),
]);

export type MeiHead = Static<typeof MeiHeadSchema>;
