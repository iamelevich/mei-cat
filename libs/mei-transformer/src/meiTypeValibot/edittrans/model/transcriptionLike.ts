import * as v from "valibot";
import { type AddData, AddSchema } from "../add";
import { type CorrData, CorrSchema } from "../corr";
import { type DamageData, DamageSchema } from "../damage";
import { type DelData, DelSchema } from "../del";
import { type GapData, GapSchema } from "../gap";
import { type HandShiftData, HandShiftSchema } from "../handShift";
import { type OrigData, OrigSchema } from "../orig";
import { type RegData, RegSchema } from "../reg";
import { type RestoreData, RestoreSchema } from "../restore";
import { type SicData, SicSchema } from "../sic";
import { type SuppliedData, SuppliedSchema } from "../supplied";
import { type UnclearData, UnclearSchema } from "../unclear";

/**
 * Groups elements used for editorial transcription of pre-existing source materials.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.transcriptionLike.html
 */
export const TranscriptionLikeSchema: v.GenericSchema<TranscriptionLikeData> =
	v.object({
		/**
		 * Marks an addition to the text.
		 * @see https://music-encoding.org/guidelines/v5/elements/add.html
		 */
		add: v.optional(
			v.union([v.lazy(() => AddSchema), v.array(v.lazy(() => AddSchema))]),
		),
		/**
		 * Contains the correct form of an apparent erroneous passage.
		 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
		 */
		corr: v.optional(
			v.union([v.lazy(() => CorrSchema), v.array(v.lazy(() => CorrSchema))]),
		),
		/**
		 * Contains an area of damage to the physical medium.
		 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
		 */
		damage: v.optional(
			v.union([
				v.lazy(() => DamageSchema),
				v.array(v.lazy(() => DamageSchema)),
			]),
		),
		/**
		 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
		 * @see https://music-encoding.org/guidelines/v5/elements/del.html
		 */
		del: v.optional(
			v.union([v.lazy(() => DelSchema), v.array(v.lazy(() => DelSchema))]),
		),
		/**
		 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
		 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
		 */
		gap: v.optional(
			v.union([v.lazy(() => GapSchema), v.array(v.lazy(() => GapSchema))]),
		),
		/**
		 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
		 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
		 */
		handShift: v.optional(
			v.union([
				v.lazy(() => HandShiftSchema),
				v.array(v.lazy(() => HandShiftSchema)),
			]),
		),
		/**
		 * Contains material which is marked as following the original, rather than being normalized or corrected.
		 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
		 */
		orig: v.optional(
			v.union([v.lazy(() => OrigSchema), v.array(v.lazy(() => OrigSchema))]),
		),
		/**
		 * Contains material which has been regularized or normalized in some sense.
		 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
		 */
		reg: v.optional(
			v.union([v.lazy(() => RegSchema), v.array(v.lazy(() => RegSchema))]),
		),
		/**
		 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
		 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
		 */
		restore: v.optional(
			v.union([
				v.lazy(() => RestoreSchema),
				v.array(v.lazy(() => RestoreSchema)),
			]),
		),
		/**
		 * Contains apparently incorrect or inaccurate material.
		 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
		 */
		sic: v.optional(
			v.union([v.lazy(() => SicSchema), v.array(v.lazy(() => SicSchema))]),
		),
		/**
		 * Contains material supplied by the transcriber or editor for any reason.
		 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
		 */
		supplied: v.optional(
			v.union([
				v.lazy(() => SuppliedSchema),
				v.array(v.lazy(() => SuppliedSchema)),
			]),
		),
		/**
		 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
		 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
		 */
		unclear: v.optional(
			v.union([
				v.lazy(() => UnclearSchema),
				v.array(v.lazy(() => UnclearSchema)),
			]),
		),
	});

export type TranscriptionLikeData = {
	add?: AddData | AddData[];
	corr?: CorrData | CorrData[];
	damage?: DamageData | DamageData[];
	del?: DelData | DelData[];
	gap?: GapData | GapData[];
	handShift?: HandShiftData | HandShiftData[];
	orig?: OrigData | OrigData[];
	reg?: RegData | RegData[];
	restore?: RestoreData | RestoreData[];
	sic?: SicData | SicData[];
	supplied?: SuppliedData | SuppliedData[];
	unclear?: UnclearData | UnclearData[];
};
