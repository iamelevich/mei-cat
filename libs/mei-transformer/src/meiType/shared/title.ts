import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { DelSchema } from "../edittrans/del";
import { ExpanSchema } from "../edittrans/expan";
import { GapSchema } from "../edittrans/gap";
import { HandShiftSchema } from "../edittrans/handShift";
import { OrigSchema } from "../edittrans/orig";
import { RegSchema } from "../edittrans/reg";
import { RestoreSchema } from "../edittrans/restore";
import { SicSchema } from "../edittrans/sic";
import { SubstSchema } from "../edittrans/subst";
import { SuppliedSchema } from "../edittrans/supplied";
import { UnclearSchema } from "../edittrans/unclear";
import { AttrAuthorizedSchema } from "./attr/authorized";
import { AttrBiblSchema } from "./attr/bibl";
import { AttrClassedSchema } from "./attr/classed";
import { AttrFacsimileSchema } from "./attr/facsimile";
import { AttrFilingSchema } from "./attr/filing";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrLangSchema } from "./attr/lang";
import { AttrLinkingSchema } from "./attr/linking";
import { AttrNNumberLikeSchema } from "./attr/nNumberLike";
import { AttrResponsibilitySchema } from "./attr/responsibility";
import { TitlePartSchema } from "./titlePart";

/**
 * Title of a bibliographic entity.
 * @see https://music-encoding.org/guidelines/v5/elements/title.html
 */
export const TitleSchema = Type.Intersect([
	StandardTagSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrClassedSchema,
	AttrFacsimileSchema,
	AttrFilingSchema,
	AttrLabelledSchema,
	AttrLangSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	Type.Object(
		{
			/**
			 * Indicates the bibliographic level of the title. Allowed values are:
			 * "a" (Analyzed component, such as an article or chapter, within a larger bibliographic entity.),
			 * "c" (Collection. A group of items that were not originally published, distributed, or produced together.),
			 * "d" (Subunit of a collection, , item, folder, box, archival series, subgroup, or subcollection.),
			 * "i" (Integrating resource, such as a continuously updated loose-leaf service or Web site.),
			 * "m" (Monograph.),
			 * "j" (Journal.),
			 * "s" (Series.),
			 * "u" (Unpublished (including theses and dissertations unless published by a commercial press).)
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			"@level": Type.Optional(
				Type.Union([
					Type.Literal("a"),
					Type.Literal("c"),
					Type.Literal("d"),
					Type.Literal("i"),
					Type.Literal("m"),
					Type.Literal("j"),
					Type.Literal("s"),
					Type.Literal("u"),
				]),
			),
			/**
			 * Characterizes the title in some sense, using any convenient classification scheme or typology that employs single-token labels.
			 * Suggested values are:
			 * "main" (Main title.),
			 * "subordinate" (Subtitle or title of part.),
			 * "abbreviated" (Abbreviated form of title.),
			 * "alternative" (Alternate title by which the item is also known.),
			 * "translated" (Translated form of title.),
			 * "uniform" (Collective title.),
			 * "desc" (Descriptive paraphrase of the work.)
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			"@type": Type.Optional(Type.String()),

			// Content model according to MEI spec:
			// rng:zeroOrMore - choice of text OR macro.titlePart OR model.editLike OR model.transcriptionLike OR titlePart
			// Text content is handled by Type.String() in the schema

			// model.editLike elements
			/**
			 * Marks an addition to the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Groups a number of alternative encodings for the same point in a text.
			 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
			 */
			choice: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Contains the correct form of an apparent erroneous passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Contains an area of damage to the physical medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(Type.Union([DelSchema, Type.Array(DelSchema)])),

			/**
			 * Contains the expansion of an abbreviation.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(Type.Union([ExpanSchema, Type.Array(ExpanSchema)])),

			/**
			 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
			 */
			handShift: Type.Optional(
				Type.Union([HandShiftSchema, Type.Array(HandShiftSchema)]),
			),

			/**
			 * Contains material which is marked as following the original, rather than being normalized or corrected.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(Type.Union([OrigSchema, Type.Array(OrigSchema)])),

			/**
			 * Contains material which has been regularized or normalized in some sense.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(Type.Union([RegSchema, Type.Array(RegSchema)])),

			/**
			 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([RestoreSchema, Type.Array(RestoreSchema)]),
			),

			/**
			 * Contains apparently incorrect or inaccurate material.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(Type.Union([SicSchema, Type.Array(SicSchema)])),

			/**
			 * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(Type.Union([SubstSchema, Type.Array(SubstSchema)])),

			// model.transcriptionLike elements
			/**
			 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(Type.Union([GapSchema, Type.Array(GapSchema)])),

			/**
			 * Contains material supplied by the transcriber or editor for any reason.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(
				Type.Union([SuppliedSchema, Type.Array(SuppliedSchema)]),
			),

			/**
			 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: Type.Optional(
				Type.Union([UnclearSchema, Type.Array(UnclearSchema)]),
			),

			// titlePart elements
			/**
			 * Contains a subsection or division of the title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/titlePart.html
			 */
			titlePart: Type.Optional(
				Type.Union([TitlePartSchema, Type.Array(TitlePartSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type Title = Static<typeof TitleSchema>;
