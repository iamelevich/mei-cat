import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
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
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrFilingSchema } from "../shared/attr/filing";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains a common noun identifying a geographical feature.
 * @see https://music-encoding.org/guidelines/v5/elements/geogFeat.html
 */
export const GeogFeatSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	AttrAuthorizedSchema,
	AttrDatableSchema,
	AttrFilingSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - choice of text OR model.textPhraseLike OR model.editLike OR model.transcriptionLike
			// Text content is handled by Type.String() in the schema

			// model.textPhraseLike elements
			/**
			 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(
				Type.Union([Type.String(), Type.Array(Type.String())]),
			),

			// model.editLike elements
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
		},
		{ additionalProperties: false },
	),
]);

export type GeogFeat = Static<typeof GeogFeatSchema>;
