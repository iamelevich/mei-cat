import * as v from "valibot";
import { type MeterSigData, MeterSigSchema } from "../../cmn/element/meterSig";
import {
	type MeterSigGrpData,
	MeterSigGrpSchema,
} from "../../cmn/element/meterSigGrp";

/**
 * Groups elements that represent a meter signature.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.meterSigLike.html
 */
export const ModelMeterSigLikeSchema: v.GenericSchema<ModelMeterSigLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Written meter signature.
			 * @see https://music-encoding.org/guidelines/v5/elements/meterSig.html
			 */
			meterSig: v.optional(v.union([MeterSigSchema, v.array(MeterSigSchema)])),
			/**
			 * Used to capture alternating, interchanging, mixed or other non-standard meter signatures.
			 * @see https://music-encoding.org/guidelines/v5/elements/meterSigGrp.html
			 */
			meterSigGrp: v.optional(
				v.union([MeterSigGrpSchema, v.array(MeterSigGrpSchema)]),
			),
		}),
	);

export type ModelMeterSigLikeData = {
	meterSig?: MeterSigData | MeterSigData[];
	meterSigGrp?: MeterSigGrpData | MeterSigGrpData[];
};
