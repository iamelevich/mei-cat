import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AddSchema } from "../edittrans/add";
import { CorrSchema } from "../edittrans/corr";
import { DamageSchema } from "../edittrans/damage";
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
import { AbbrSchema } from "../shared/abbr";
import { AnnotSchema } from "../shared/annot";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTabularSchema } from "../shared/attr/tabular";
import { AttrTextRenditionSchema } from "../shared/attr/textRendition";
import { AttrXySchema } from "../shared/attr/xy";
import { LbSchema } from "../shared/lb";
import { LgSchema } from "../shared/lg";
import { ListSchema } from "../shared/list";
import { NameSchema } from "../shared/name";
import { NumSchema } from "../shared/num";
import { PSchema } from "../shared/p";
import { PbSchema } from "../shared/pb";
import { QuoteSchema } from "../shared/quote";
import { RendSchema } from "../shared/rend";
import { TermSchema } from "../shared/term";
import { SegSchema } from "../text/seg";

/**
 * Designates a table cell containing column or row heading information as opposed to one containing data.
 * @see https://music-encoding.org/guidelines/v5/elements/th.html
 */
export const ThSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	AttrTabularSchema,
	AttrTextRenditionSchema,
	AttrXySchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// Zero or more choice of:
			// - text
			// - model.textComponentLike
			// - model.textPhraseLike
			// - model.editLike
			// - model.transcriptionLike

			// model.textComponentLike elements
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.String(), Type.Array(Type.String())]),
			),

			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),

			/**
			 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, e.g., a stanza, refrain, verse paragraph, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
			 */
			lg: Type.Optional(Type.Union([LgSchema, Type.Array(LgSchema)])),

			/**
			 * A formatting element that contains a series of items separated from one another and arranged in a linear, often vertical, sequence.
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: Type.Optional(Type.Union([ListSchema, Type.Array(ListSchema)])),

			/**
			 * Contains a paragraph-like block of text attributed to an external source, normally set off from the surrounding text by spacing or other typographic distinction.
			 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
			 */
			quote: Type.Optional(Type.Union([QuoteSchema, Type.Array(QuoteSchema)])),

			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([RendSchema, Type.Array(RendSchema)])),

			/**
			 * Represents any segmentation of text below the "text component" level.
			 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
			 */
			seg: Type.Optional(Type.Union([SegSchema, Type.Array(SegSchema)])),

			// model.textPhraseLike elements
			/**
			 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),

			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(Type.Union([AnnotSchema, Type.Array(AnnotSchema)])),

			/**
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(Type.Union([LbSchema, Type.Array(LbSchema)])),

			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(Type.Union([NameSchema, Type.Array(NameSchema)])),

			/**
			 * Numeric information in any form.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(Type.Union([NumSchema, Type.Array(NumSchema)])),

			/**
			 * An empty formatting element that forces text to begin on a new page.
			 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
			 */
			pb: Type.Optional(Type.Union([PbSchema, Type.Array(PbSchema)])),

			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(Type.Union([TermSchema, Type.Array(TermSchema)])),

			// model.editLike elements
			/**
			 * Marks an addition to the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: Type.Optional(Type.Union([AddSchema, Type.Array(AddSchema)])),

			/**
			 * Contains the correct form of an apparent erroneous passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: Type.Optional(Type.Union([CorrSchema, Type.Array(CorrSchema)])),

			/**
			 * Contains an area of damage to the physical medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: Type.Optional(
				Type.Union([DamageSchema, Type.Array(DamageSchema)]),
			),

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

export type Th = Static<typeof ThSchema>;
