import * as v from "valibot";
import {
	type ModelStaffDefPartMensuralData,
	ModelStaffDefPartMensuralSchema,
} from "../../mensural";
import {
	type ClefData,
	type ClefGrpData,
	ClefGrpSchema,
	ClefSchema,
	type ModelKeySigLikeData,
	ModelKeySigLikeSchema,
	type ModelMeterSigLikeData,
	ModelMeterSigLikeSchema,
	type TuningData,
	TuningSchema,
} from "..";

/**
 * Groups elements that may appear in the declaration of staff features.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffDefPart.html
 */
export const ModelStaffDefPartSchema: v.GenericSchema<ModelStaffDefPartData> =
	v.intersect([
		v.object({
			/**
			 * Indication of the exact location of a particular note on the staff and, therefore, the other notes as well.
			 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
			 */
			clef: v.optional(
				v.union([v.lazy(() => ClefSchema), v.array(v.lazy(() => ClefSchema))]),
			),
			/**
			 * A set of simultaneously-occurring clefs.
			 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
			 */
			clefGrp: v.optional(
				v.union([
					v.lazy(() => ClefGrpSchema),
					v.array(v.lazy(() => ClefGrpSchema)),
				]),
			),
			/**
			 * Describes the tuning of an instrument.
			 * @see https://music-encoding.org/guidelines/v5/elements/tuning.html
			 */
			tuning: v.optional(
				v.union([
					v.lazy(() => TuningSchema),
					v.array(v.lazy(() => TuningSchema)),
				]),
			),
		}),
		ModelKeySigLikeSchema,
		ModelMeterSigLikeSchema,
		ModelStaffDefPartMensuralSchema,
	]);

export type ModelStaffDefPartData = {
	clef?: ClefData | ClefData[];
	clefGrp?: ClefGrpData | ClefGrpData[];
	tuning?: TuningData | TuningData[];
} & ModelKeySigLikeData &
	ModelMeterSigLikeData &
	ModelStaffDefPartMensuralData;
