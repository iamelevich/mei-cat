import * as v from "valibot";
import { type AddData, AddSchema } from "../element/add";
import { type CorrData, CorrSchema } from "../element/corr";
import { type DamageData, DamageSchema } from "../element/damage";
import { type DelData, DelSchema } from "../element/del";
import { type GapData, GapSchema } from "../element/gap";
import { type HandShiftData, HandShiftSchema } from "../element/handShift";
import { type OrigData, OrigSchema } from "../element/orig";
import { type RegData, RegSchema } from "../element/reg";
import { type RestoreData, RestoreSchema } from "../element/restore";
import { type SicData, SicSchema } from "../element/sic";
import { type SuppliedData, SuppliedSchema } from "../element/supplied";
import { type UnclearData, UnclearSchema } from "../element/unclear";

/**
 * Groups elements used for editorial transcription of pre-existing source materials.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.transcriptionLike.html
 */
export const ModelTranscriptionLikeSchema: v.GenericSchema<ModelTranscriptionLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Marks an addition to the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: v.optional(v.union([v.array(AddSchema), AddSchema])),
			/**
			 * Contains the correct form of an apparent erroneous passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: v.optional(v.union([v.array(CorrSchema), CorrSchema])),
			/**
			 * Contains an area of damage to the physical medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: v.optional(v.union([v.array(DamageSchema), DamageSchema])),
			/**
			 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: v.optional(v.union([v.array(DelSchema), DelSchema])),
			/**
			 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: v.optional(v.union([v.array(GapSchema), GapSchema])),
			/**
			 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
			 */
			handShift: v.optional(
				v.union([v.array(HandShiftSchema), HandShiftSchema]),
			),
			/**
			 * Contains material which is marked as following the original, rather than being normalized or corrected.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: v.optional(v.union([v.array(OrigSchema), OrigSchema])),
			/**
			 * Contains material which has been regularized or normalized in some sense.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: v.optional(v.union([v.array(RegSchema), RegSchema])),
			/**
			 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: v.optional(v.union([v.array(RestoreSchema), RestoreSchema])),
			/**
			 * Contains apparently incorrect or inaccurate material.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: v.optional(v.union([v.array(SicSchema), SicSchema])),
			/**
			 * Contains material supplied by the transcriber or editor for any reason.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: v.optional(v.union([v.array(SuppliedSchema), SuppliedSchema])),
			/**
			 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: v.optional(v.union([v.array(UnclearSchema), UnclearSchema])),
		}),
	);

export type ModelTranscriptionLikeData = {
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
