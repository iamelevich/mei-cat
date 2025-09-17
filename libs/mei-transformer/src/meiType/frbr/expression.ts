import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";

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
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),

			// rng:zeroOrMore - model.identifierLike
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

			// rng:oneOrMore - model.titleLike
			/**
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Union([Type.Ref("title"), Type.Array(Type.Ref("title"))]),

			// rng:zeroOrMore - model.respLikePart
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

			// rng:zeroOrMore - model.workIdent
			// Note: workIdent elements are not implemented as separate schemas in this codebase
			// They would typically be work-related identifiers or references

			// rng:zeroOrMore - otherChar
			/**
			 * Any characteristic that serves to differentiate a work or expression from another.
			 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
			 */
			otherChar: Type.Optional(
				Type.Union([Type.Ref("otherchar"), Type.Array(Type.Ref("otherchar"))]),
			),

			// rng:optional - creation
			/**
			 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
			 */
			creation: Type.Optional(Type.Ref("creation")),

			// rng:optional - history
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: Type.Optional(Type.Ref("history")),

			// rng:optional - langUsage
			/**
			 * Groups elements describing the languages, sub-languages, dialects, etc., represented within the encoded resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
			 */
			langUsage: Type.Optional(Type.Ref("langusage")),

			// rng:optional - perfMedium
			/**
			 * Indicates the number and character of the performing forces used in a musical composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
			 */
			perfMedium: Type.Optional(Type.Ref("perfmedium")),

			// rng:optional - perfDuration
			/**
			 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
			 */
			perfDuration: Type.Optional(Type.Ref("perfduration")),

			// rng:zeroOrMore - extent
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([Type.Ref("extent"), Type.Array(Type.Ref("extent"))]),
			),

			// rng:optional - scoreFormat
			/**
			 * Describes the type of score used to represent a musical composition (e.g., short score, full score, condensed score, close score, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
			 */
			scoreFormat: Type.Optional(Type.Ref("scoreformat")),

			// rng:optional - contents
			/**
			 * List of the material contained within a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: Type.Optional(Type.Ref("contents")),

			// rng:optional - context
			/**
			 * The historical, social, intellectual, artistic, or other context within which the work was originally conceived or the historical, social, intellectual, artistic, or other context within which the expression was realized.
			 * @see https://music-encoding.org/guidelines/v5/elements/context.html
			 */
			context: Type.Optional(Type.Ref("context")),

			// rng:zeroOrMore - biblList
			/**
			 * List of bibliographic references.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: Type.Optional(
				Type.Union([Type.Ref("bibllist"), Type.Array(Type.Ref("bibllist"))]),
			),

			// rng:optional - notesStmt
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(Type.Ref("notesstmt")),

			// rng:optional - classification
			/**
			 * Groups information which describes the nature or topic of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
			 */
			classification: Type.Optional(Type.Ref("classification")),

			// rng:optional - componentList
			/**
			 * Container for intellectual or physical component parts of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
			 */
			componentList: Type.Optional(Type.Ref("componentlist")),

			// rng:optional - relationList
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(Type.Ref("relationlist")),

			// rng:zeroOrMore - extMeta
			/**
			 * Provides a container element for non-MEI metadata formats.
			 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
			 */
			extMeta: Type.Optional(
				Type.Union([Type.Ref("extmeta"), Type.Array(Type.Ref("extmeta"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
