import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ExpressionListSchema } from "../frbr/expressionList";
import { ArrangerSchema } from "../shared/arranger";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../shared/attr/targetEval";
import { AuthorSchema } from "../shared/author";
import { BiblListSchema } from "../shared/biblList";
import { ComposerSchema } from "../shared/composer";
import { ContentsSchema } from "../shared/contents";
import { ContributorSchema } from "../shared/contributor";
import { CreationSchema } from "../shared/creation";
import { EditorSchema } from "../shared/editor";
import { FunderSchema } from "../shared/funder";
import { HeadSchema } from "../shared/head";
import { IdentifierSchema } from "../shared/identifier";
import { LibrettistSchema } from "../shared/librettist";
import { LyricistSchema } from "../shared/lyricist";
import { OtherCharSchema } from "../shared/otherChar";
import { RelationListSchema } from "../shared/relationList";
import { SponsorSchema } from "../shared/sponsor";
import { TitleSchema } from "../shared/title";
import { AudienceSchema } from "./audience";
import { ClassificationSchema } from "./classification";
import { ComponentListSchema } from "./componentList";
import { ContextSchema } from "./context";
import { ExtMetaSchema } from "./extMeta";
import { HistorySchema } from "./history";
import { LangUsageSchema } from "./langUsage";
import { NotesStmtSchema } from "./notesStmt";
import { PerfDurationSchema } from "./perfDuration";
import { PerfMediumSchema } from "./perfMedium";

/**
 * Provides a detailed description of a work — a distinct intellectual or artistic creation — specifically its history, language use, and high-level musical attributes (e.g., key, tempo, meter, medium of performance, and intended duration).
 * @see https://music-encoding.org/guidelines/v5/elements/work.html
 */
export const WorkSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	Type.Object(
		{
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
			/**
			 * Any characteristic that serves to differentiate a work or expression from another.
			 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
			 */
			otherChar: Type.Optional(
				Type.Union([OtherCharSchema, Type.Array(OtherCharSchema)]),
			),
			// rng:optional elements
			/**
			 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition. More detailed information may be captured within the history element.
			 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
			 */
			creation: Type.Optional(CreationSchema),
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: Type.Optional(HistorySchema),
			/**
			 * Groups elements describing the languages, sub-languages, dialects, etc., represented within the encoded resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
			 */
			langUsage: Type.Optional(LangUsageSchema),
			/**
			 * Indicates the number and character of the performing forces used in a musical composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
			 */
			perfMedium: Type.Optional(PerfMediumSchema),
			/**
			 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
			 */
			perfDuration: Type.Optional(PerfDurationSchema),
			/**
			 * Defines the class of user for which the work is intended, as defined by age group (e.g., children, young adults, adults, etc.), educational level (e.g., primary, secondary, etc.), or other categorization.
			 * @see https://music-encoding.org/guidelines/v5/elements/audience.html
			 */
			audience: Type.Optional(AudienceSchema),
			/**
			 * List of the material contained within a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: Type.Optional(ContentsSchema),
			/**
			 * The historical, social, intellectual, artistic, or other context within which the work was originally conceived (e.g., the 17th century restoration of the monarchy in England, the aesthetic movement of the late 19th century, etc.) or the historical, social, intellectual, artistic, or other context within which the expression was realized.
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
			// rng:optional elements
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(NotesStmtSchema),
			/**
			 * Groups information which describes the nature or topic of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
			 */
			classification: Type.Optional(ClassificationSchema),
			/**
			 * Gathers bibliographic expression entities.
			 * @see https://music-encoding.org/guidelines/v5/elements/expressionList.html
			 */
			expressionList: Type.Optional(ExpressionListSchema),
			/**
			 * Container for intellectual or physical component parts of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
			 */
			componentList: Type.Optional(ComponentListSchema),
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

export type Work = Static<typeof WorkSchema>;
