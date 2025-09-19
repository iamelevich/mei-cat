import * as v from "valibot";
import { type FingData, FingSchema, type FingGrpData, FingGrpSchema } from "..";

/**
 * Groups elements that capture performance instructions regarding the use of the fingers of the hand (or a subset of them).
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.fingeringLike.html
 */
export const ModelFingeringLikeSchema: v.GenericSchema<ModelFingeringLikeData> =
	v.object({
		/**
		 * An individual finger in a fingering indication.
		 * @see https://music-encoding.org/guidelines/v5/elements/fing.html
		 */
		fing: v.optional(
			v.union([v.lazy(() => FingSchema), v.array(v.lazy(() => FingSchema))]),
		),
		/**
		 * A group of individual fingers in a fingering indication.
		 * @see https://music-encoding.org/guidelines/v5/elements/fingGrp.html
		 */
		fingGrp: v.optional(
			v.union([
				v.lazy(() => FingGrpSchema),
				v.array(v.lazy(() => FingGrpSchema)),
			]),
		),
	});

export type ModelFingeringLikeData = {
	fing?: FingData | FingData[];
	fingGrp?: FingGrpData | FingGrpData[];
};
