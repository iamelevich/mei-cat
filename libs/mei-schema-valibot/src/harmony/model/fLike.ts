import * as v from "valibot";
import { type FData, FSchema } from "../element/f";

/**
 * Groups elements that represent single figured bass elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.fLike.html
 */
export const ModelFLikeSchema: v.GenericSchema<ModelFLikeData> = v.lazy(() =>
	v.object({
		/**
		 * Single element of a figured bass indication.
		 * @see https://music-encoding.org/guidelines/v5/elements/f.html
		 */
		f: v.optional(v.union([v.array(FSchema), FSchema])),
	}),
);

export type ModelFLikeData = {
	f?: FData | FData[];
};
