import * as v from "valibot";
import {
	type ModelStaffDefPartMensuralData,
	ModelStaffDefPartMensuralSchema,
} from "../../mensural/model/staffDefPart.mensural";
import { type ClefData, ClefSchema } from "../element/clef";
import { type ClefGrpData, ClefGrpSchema } from "../element/clefGrp";
import { type TuningData, TuningSchema } from "../element/tuning";
import { type ModelKeySigLikeData, ModelKeySigLikeSchema } from "./keySigLike";
import {
	type ModelMeterSigLikeData,
	ModelMeterSigLikeSchema,
} from "./meterSigLike";

/**
 * Groups elements that may appear in the declaration of staff features.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffDefPart.html
 */
export const ModelStaffDefPartSchema: v.GenericSchema<ModelStaffDefPartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Indication of the exact location of a particular note on the staff and, therefore, the other notes as well.
				 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
				 */
				clef: v.optional(v.union([v.array(ClefSchema), ClefSchema])),
				/**
				 * A set of simultaneously-occurring clefs.
				 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
				 */
				clefGrp: v.optional(v.union([v.array(ClefGrpSchema), ClefGrpSchema])),
				/**
				 * Describes the tuning of an instrument.
				 * @see https://music-encoding.org/guidelines/v5/elements/tuning.html
				 */
				tuning: v.optional(v.union([v.array(TuningSchema), TuningSchema])),
			}),
			ModelKeySigLikeSchema,
			ModelMeterSigLikeSchema,
			ModelStaffDefPartMensuralSchema,
		]),
	);

export type ModelStaffDefPartData = {
	clef?: ClefData | ClefData[];
	clefGrp?: ClefGrpData | ClefGrpData[];
	tuning?: TuningData | TuningData[];
} & ModelKeySigLikeData &
	ModelMeterSigLikeData &
	ModelStaffDefPartMensuralData;
