import * as v from "valibot";
import { type EndingData, EndingSchema } from "../element/ending";

/**
 * Groups elements that represent alternative endings.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.endingLike.html
 */
export const ModelEndingLikeSchema: v.GenericSchema<ModelEndingLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Alternative ending for a repeated passage of music; i.e. , prima volta, seconda volta, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/ending.html
			 */
			ending: v.optional(v.union([v.array(EndingSchema), EndingSchema])),
		}),
	);

export type ModelEndingLikeData = {
	ending?: EndingData | EndingData[];
};
