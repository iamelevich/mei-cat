import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ClassificationSchema } from "../header/classification";
import { ContentsSchema } from "../header/contents";
import { ContextSchema } from "../header/context";
import { ExtMetaSchema } from "../header/extMeta";
import { HistorySchema } from "../header/history";
import { LangUsageSchema } from "../header/langUsage";
import { NotesStmtSchema } from "../header/notesStmt";
import { OtherCharSchema } from "../header/otherChar";
import { PerfDurationSchema } from "../header/perfDuration";
import { PerfMediumSchema } from "../header/perfMedium";
import { ScoreFormatSchema } from "../header/scoreFormat";
import { ArrangerSchema } from "../shared/arranger";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AuthorSchema } from "../shared/author";
import { BiblListSchema } from "../shared/biblList";
import { ComposerSchema } from "../shared/composer";
import { ContributorSchema } from "../shared/contributor";
import { CreationSchema } from "../shared/creation";
import { EditorSchema } from "../shared/editor";
import { ExtentSchema } from "../shared/extent";
import { FunderSchema } from "../shared/funder";
import { HeadSchema } from "../shared/head";
import { IdentifierSchema } from "../shared/identifier";
import { LibrettistSchema } from "../shared/librettist";
import { LyricistSchema } from "../shared/lyricist";
import { RelationListSchema } from "../shared/relationList";
import { SponsorSchema } from "../shared/sponsor";
import { TitleSchema } from "../shared/title";

/**
 * Intellectual or artistic realization of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/expression.html
 */
export const ExpressionSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),

			// rng:zeroOrMore - model.identifierLike
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
			),

			// rng:oneOrMore - model.titleLike
			/**
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Union([TitleSchema, Type.Array(TitleSchema)]),

			// rng:zeroOrMore - model.respLikePart
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

			// rng:zeroOrMore - model.workIdent
			// Note: workIdent elements are not implemented as separate schemas in this codebase
			// They would typically be work-related identifiers or references

			// rng:zeroOrMore - otherChar
			/**
			 * Any characteristic that serves to differentiate a work or expression from another.
			 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
			 */
			otherChar: Type.Optional(
				Type.Union([OtherCharSchema, Type.Array(OtherCharSchema)]),
			),

			// rng:optional - creation
			/**
			 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
			 */
			creation: Type.Optional(CreationSchema),

			// rng:optional - history
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: Type.Optional(HistorySchema),

			// rng:optional - langUsage
			/**
			 * Groups elements describing the languages, sub-languages, dialects, etc., represented within the encoded resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
			 */
			langUsage: Type.Optional(LangUsageSchema),

			// rng:optional - perfMedium
			/**
			 * Indicates the number and character of the performing forces used in a musical composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
			 */
			perfMedium: Type.Optional(PerfMediumSchema),

			// rng:optional - perfDuration
			/**
			 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
			 */
			perfDuration: Type.Optional(PerfDurationSchema),

			// rng:zeroOrMore - extent
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([ExtentSchema, Type.Array(ExtentSchema)]),
			),

			// rng:optional - scoreFormat
			/**
			 * Describes the type of score used to represent a musical composition (e.g., short score, full score, condensed score, close score, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
			 */
			scoreFormat: Type.Optional(ScoreFormatSchema),

			// rng:optional - contents
			/**
			 * List of the material contained within a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: Type.Optional(ContentsSchema),

			// rng:optional - context
			/**
			 * The historical, social, intellectual, artistic, or other context within which the work was originally conceived or the historical, social, intellectual, artistic, or other context within which the expression was realized.
			 * @see https://music-encoding.org/guidelines/v5/elements/context.html
			 */
			context: Type.Optional(ContextSchema),

			// rng:zeroOrMore - biblList
			/**
			 * List of bibliographic references.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: Type.Optional(
				Type.Union([BiblListSchema, Type.Array(BiblListSchema)]),
			),

			// rng:optional - notesStmt
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(NotesStmtSchema),

			// rng:optional - classification
			/**
			 * Groups information which describes the nature or topic of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
			 */
			classification: Type.Optional(ClassificationSchema),

			// rng:optional - componentList
			/**
			 * Container for intellectual or physical component parts of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
			 */
			componentList: Type.Optional(Type.Any()), // TODO: Avoid circular dependency with ComponentListSchema

			// rng:optional - relationList
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(RelationListSchema),

			// rng:zeroOrMore - extMeta
			/**
			 * Provides a container element for non-MEI metadata formats.
			 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
			 */
			extMeta: Type.Optional(
				Type.Union([ExtMetaSchema, Type.Array(ExtMetaSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type Expression = Static<typeof ExpressionSchema>;
