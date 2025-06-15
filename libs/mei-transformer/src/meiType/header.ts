/**
 * @fileoverview Metadata header component declarations.
 * @see https://music-encoding.org/guidelines/v5/modules/MEI.header.html
 */
import type {
	AttrBasic,
	AttrBibl,
	AttrCommon,
	AttrLabeled,
	AttrLang,
	AttrMeiVersion,
	AttrResponsibility,
} from "./attributes";
import type { NotImplementedTag, StandardTag } from "./common";
import type { Title } from "./shared";

/**
 * Supplies the descriptive and declarative metadata prefixed to every MEI-conformant text.
 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
 */
export type MeiHead = StandardTag &
	AttrBasic &
	AttrMeiVersion &
	AttrResponsibility &
	AttrLang &
	AttrLabeled &
	AttrBibl & {
		/**
		 * Specifies the kind of document to which the header is attached, for example whether it is a corpus or individual text.
		 * Allowed values are:
		 *   "music" (Header is attached to a music document.),
		 *   "corpus" (Header is attached to a corpus.),
		 *   "independent" (Header is independent; not attached to either a music or a corpus document.)
		 */
		"@type"?: "music" | "corpus" | "independent";

		/**
		 * A container for the descriptions of physical embodiments of an expression of a work.
		 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
		 */
		manifestationList: NotImplementedTag;
		/**
		 * May contain a bibliographic identifier that does not fit within the meiHead element's id attribute,
		 * for example because the identifier does not fit the definition of an XML id or because multiple identifiers are needed.
		 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
		 */
		altId?: NotImplementedTag;
		/**
		 * Contains a full bibliographic description of the MEI file.
		 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
		 */
		fileDesc: FileDesc;
		/**
		 * Documents the relationship between an electronic file and the source or sources from which it was derived as well
		 * as applications used in the encoding/editing process.
		 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
		 */
		encodingDesc?: NotImplementedTag;
		/**
		 * Grouping mechanism for information describing non-bibliographic aspects of a text.
		 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
		 */
		workList?: NotImplementedTag;
		/**
		 * Container for information about alterations that have been made to an MEI file.
		 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
		 */
		revisionDesc?: NotImplementedTag;
		/**
		 * Provides a container element for non-MEI metadata formats.
		 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
		 */
		extMeta?: NotImplementedTag;
	};

/**
 * Contains a full bibliographic description of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
 */
export type FileDesc = StandardTag &
	AttrCommon & {
		titleStmt: TitleStmt;
		editionStmt?: NotImplementedTag;
		notesStmt?: NotImplementedTag;
		pubStmt?: NotImplementedTag;
		seriesStmt?: NotImplementedTag;
		sourceDesc?: NotImplementedTag;
		extend?: NotImplementedTag;
	};

/**
 * Container for title and responsibility meta-data.
 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
 */
export type TitleStmt = StandardTag &
	AttrCommon & {
		/**
		 * Title of a bibliographic entity.
		 */
		title: Title | Title[];
		/**
		 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original;
		 * in an arrangement the musical substance remains essentially unchanged.
		 */
		arranger?: NotImplementedTag;
		/**
		 * The name of the creator of the intellectual content of a non-musical, literary work.
		 */
		author?: NotImplementedTag;
		/**
		 * The name of the creator of the intellectual content of a musical work.
		 */
		composer?: NotImplementedTag;
		/**
		 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work,
		 * where the specialized elements for authors, editors, etc. do not suffice or do not apply.
		 */
		contributor?: NotImplementedTag;
		/**
		 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
		 */
		editor?: NotImplementedTag;
		/**
		 * Names of individuals, institutions, or organizations responsible for funding.
		 * Funders provide financial support for a project; they are distinct from sponsors,
		 * who provide intellectual support and authority.
		 */
		funder?: NotImplementedTag;
		/**
		 * Contains any heading, for example, the title of a section of text, or the heading of a list.
		 */
		head?: NotImplementedTag;
		/**
		 * Person or organization who is a writer of the text of an opera, oratorio, etc.
		 */
		librettist?: NotImplementedTag;
		/**
		 * Person or organization who is a writer of the text of a song.
		 */
		lyricist?: NotImplementedTag;
		/**
		 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes,
		 * responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
		 */
		respStmt?: NotImplementedTag;
		/**
		 * Names of sponsoring individuals, organizations or institutions.
		 * Sponsors give their intellectual authority to a project; they are to be distinguished from funders,
		 * who provide the funding but do not necessarily take intellectual responsibility.
		 */
		sponsor?: NotImplementedTag;
	};
