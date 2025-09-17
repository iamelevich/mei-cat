import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";

/**
 * Intellectual or artistic realization of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/expression.html
 */
export const ExpressionSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrDataPointingSchema.entries,

	// Content model according to MEI spec:
	// rng:zeroOrMore - model.headLike
	/**
	 * Contains any heading, for example, the title of a section of text, or the heading of a list.
	 * @see https://music-encoding.org/guidelines/v5/elements/head.html
	 */
	head: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// rng:zeroOrMore - model.identifierLike
	/**
	 * An alpha-numeric string that establishes the identity of the described material.
	 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
	 */
	identifier: v.optional(
		v.union([
			v.lazy(() => v.unknown()),
			v.array(v.lazy(() => v.unknown())),
		]),
	),

	// rng:oneOrMore - model.titleLike
	/**
	 * Title of a bibliographic entity.
	 * @see https://music-encoding.org/guidelines/v5/elements/title.html
	 */
	title: v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),

	// rng:zeroOrMore - model.respLikePart
	/**
	 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
	 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
	 */
	arranger: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * The name of the creator of the intellectual content of a non-musical, literary work.
	 * @see https://music-encoding.org/guidelines/v5/elements/author.html
	 */
	author: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * The name of the creator of the intellectual content of a musical work.
	 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
	 */
	composer: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
	 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
	 */
	contributor: v.optional(
		v.union([
			v.lazy(() => v.unknown()),
			v.array(v.lazy(() => v.unknown())),
		]),
	),

	/**
	 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
	 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
	 */
	editor: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
	 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
	 */
	funder: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Person or organization who is a writer of the text of an opera, oratorio, etc.
	 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
	 */
	librettist: v.optional(
		v.union([
			v.lazy(() => v.unknown()),
			v.array(v.lazy(() => v.unknown())),
		]),
	),

	/**
	 * Person or organization who is a writer of the text of a song.
	 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
	 */
	lyricist: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
	 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
	 */
	sponsor: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// rng:zeroOrMore - otherChar
	/**
	 * Any characteristic that serves to differentiate a work or expression from another.
	 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
	 */
	otherChar: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// rng:optional - creation
	/**
	 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition.
	 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
	 */
	creation: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - history
	/**
	 * Provides a container for information about the history of a resource other than the circumstances of its creation.
	 * @see https://music-encoding.org/guidelines/v5/elements/history.html
	 */
	history: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - langUsage
	/**
	 * Groups elements describing the languages, sub-languages, dialects, etc., represented within the encoded resource.
	 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
	 */
	langUsage: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - perfMedium
	/**
	 * Indicates the number and character of the performing forces used in a musical composition.
	 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
	 */
	perfMedium: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - perfDuration
	/**
	 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
	 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
	 */
	perfDuration: v.optional(v.lazy(() => v.unknown())),

	// rng:zeroOrMore - extent
	/**
	 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
	 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
	 */
	extent: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// rng:optional - scoreFormat
	/**
	 * Describes the type of score used to represent a musical composition (e.g., short score, full score, condensed score, close score, etc.).
	 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
	 */
	scoreFormat: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - contents
	/**
	 * List of the material contained within a resource.
	 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
	 */
	contents: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - context
	/**
	 * The historical, social, intellectual, artistic, or other context within which the work was originally conceived or the historical, social, intellectual, artistic, or other context within which the expression was realized.
	 * @see https://music-encoding.org/guidelines/v5/elements/context.html
	 */
	context: v.optional(v.lazy(() => v.unknown())),

	// rng:zeroOrMore - biblList
	/**
	 * List of bibliographic references.
	 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
	 */
	biblList: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// rng:optional - notesStmt
	/**
	 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
	 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
	 */
	notesStmt: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - classification
	/**
	 * Groups information which describes the nature or topic of an entity.
	 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
	 */
	classification: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - componentList
	/**
	 * Container for intellectual or physical component parts of a bibliographic entity.
	 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
	 */
	componentList: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - relationList
	/**
	 * Gathers relation elements.
	 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
	 */
	relationList: v.optional(v.lazy(() => v.unknown())),

	// rng:zeroOrMore - extMeta
	/**
	 * Provides a container element for non-MEI metadata formats.
	 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
	 */
	extMeta: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),
});

export type ExpressionData = v.InferOutput<typeof ExpressionSchema>;
