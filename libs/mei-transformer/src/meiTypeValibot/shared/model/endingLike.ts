import * as v from "valibot";
import { type EndingData, EndingSchema } from "..";

/**
 * Groups elements that represent alternative endings.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.endingLike.html
 */
export const ModelEndingLikeSchema: v.GenericSchema<ModelEndingLikeData> =
	v.object({
		/**
		 * Alternative ending for a repeated passage of music; i.e. , prima volta, seconda volta, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/ending.html
		 */
		ending: v.optional(
			v.union([
				v.lazy(() => EndingSchema),
				v.array(v.lazy(() => EndingSchema)),
			]),
		),
	});

export type ModelEndingLikeData = {
	ending?: EndingData | EndingData[];
};
