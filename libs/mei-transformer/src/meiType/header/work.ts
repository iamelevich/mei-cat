import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../shared/attr/targetEval";
import { HeadSchema } from "../shared/head";
import { IdentifierSchema } from "../shared/identifier";
import { TitleSchema } from "../shared/title";
import { ExtMetaSchema } from "./extMeta";

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
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
			),
			/**
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Union([TitleSchema, Type.Array(TitleSchema)]),
			/**
			 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
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
			 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
			 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
			 */
			contributor: Type.Optional(NotImplementedTagSchema),
			/**
			 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: Type.Optional(NotImplementedTagSchema),
			/**
			 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
			 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
			 */
			funder: Type.Optional(NotImplementedTagSchema),
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
			 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
			 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
			 */
			sponsor: Type.Optional(NotImplementedTagSchema),
			/**
			 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition. More detailed information may be captured within the history element.
			 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
			 */
			creation: Type.Optional(NotImplementedTagSchema),
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: Type.Optional(NotImplementedTagSchema),
			/**
			 * Groups elements describing the languages, sub-languages, dialects, etc., represented within the encoded resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
			 */
			langUsage: Type.Optional(NotImplementedTagSchema),
			/**
			 * Indicates the number and character of the performing forces used in a musical composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
			 */
			perfMedium: Type.Optional(NotImplementedTagSchema),
			/**
			 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
			 */
			perfDuration: Type.Optional(NotImplementedTagSchema),
			/**
			 * Defines the class of user for which the work is intended, as defined by age group (e.g., children, young adults, adults, etc.), educational level (e.g., primary, secondary, etc.), or other categorization.
			 * @see https://music-encoding.org/guidelines/v5/elements/audience.html
			 */
			audience: Type.Optional(NotImplementedTagSchema),
			/**
			 * List of the material contained within a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: Type.Optional(NotImplementedTagSchema),
			/**
			 * The historical, social, intellectual, artistic, or other context within which the work was originally conceived (e.g., the 17th century restoration of the monarchy in England, the aesthetic movement of the late 19th century, etc.) or the historical, social, intellectual, artistic, or other context within which the expression was realized.
			 * @see https://music-encoding.org/guidelines/v5/elements/context.html
			 */
			context: Type.Optional(NotImplementedTagSchema),
			/**
			 * List of bibliographic references.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: Type.Optional(
				Type.Union([
					NotImplementedTagSchema,
					Type.Array(NotImplementedTagSchema),
				]),
			),
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(NotImplementedTagSchema),
			/**
			 * Groups information which describes the nature or topic of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
			 */
			classification: Type.Optional(NotImplementedTagSchema),
			/**
			 * Gathers bibliographic expression entities.
			 * @see https://music-encoding.org/guidelines/v5/elements/expressionList.html
			 */
			expressionList: Type.Optional(NotImplementedTagSchema),
			/**
			 * Container for intellectual or physical component parts of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
			 */
			componentList: Type.Optional(NotImplementedTagSchema),
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(NotImplementedTagSchema),
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
