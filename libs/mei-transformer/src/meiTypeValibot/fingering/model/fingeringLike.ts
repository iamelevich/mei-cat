import * as v from "valibot";
import { type FingData, FingSchema } from "../element/fing";
import { type FingGrpData, FingGrpSchema } from "../element/fingGrp";

/**
 * Groups elements that capture performance instructions regarding the use of the fingers of the hand (or a subset of them).
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.fingeringLike.html
 */
export const ModelFingeringLikeSchema: v.GenericSchema<ModelFingeringLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * An individual finger in a fingering indication.
			 * @see https://music-encoding.org/guidelines/v5/elements/fing.html
			 */
			fing: v.optional(v.union([FingSchema, v.array(FingSchema)])),
			/**
			 * A group of individual fingers in a fingering indication.
			 * @see https://music-encoding.org/guidelines/v5/elements/fingGrp.html
			 */
			fingGrp: v.optional(v.union([FingGrpSchema, v.array(FingGrpSchema)])),
		}),
	);

export type ModelFingeringLikeData = {
	fing?: FingData | FingData[];
	fingGrp?: FingGrpData | FingGrpData[];
};
