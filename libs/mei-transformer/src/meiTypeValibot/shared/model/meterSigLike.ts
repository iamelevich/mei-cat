import * as v from "valibot";
import {
	type MeterSigData,
	type MeterSigGrpData,
	MeterSigGrpSchema,
	MeterSigSchema,
} from "../../cmn";

/**
 * Groups elements that represent a meter signature.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.meterSigLike.html
 */
export const ModelMeterSigLikeSchema: v.GenericSchema<ModelMeterSigLikeData> =
	v.object({
		/**
		 * Written meter signature.
		 * @see https://music-encoding.org/guidelines/v5/elements/meterSig.html
		 */
		meterSig: v.optional(
			v.union([
				v.lazy(() => MeterSigSchema),
				v.array(v.lazy(() => MeterSigSchema)),
			]),
		),
		/**
		 * Used to capture alternating, interchanging, mixed or other non-standard meter signatures.
		 * @see https://music-encoding.org/guidelines/v5/elements/meterSigGrp.html
		 */
		meterSigGrp: v.optional(
			v.union([
				v.lazy(() => MeterSigGrpSchema),
				v.array(v.lazy(() => MeterSigGrpSchema)),
			]),
		),
	});

export type ModelMeterSigLikeData = {
	meterSig?: MeterSigData | MeterSigData[];
	meterSigGrp?: MeterSigGrpData | MeterSigGrpData[];
};
