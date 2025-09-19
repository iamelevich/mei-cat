import * as v from "valibot";
import { type FData, FSchema } from "..";

/**
 * Groups elements that represent single figured bass elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.fLike.html
 */
export const ModelFLikeSchema: v.GenericSchema<ModelFLikeData> = v.object({
	/**
	 * Single element of a figured bass indication.
	 * @see https://music-encoding.org/guidelines/v5/elements/f.html
	 */
	f: v.optional(
		v.union([v.lazy(() => FSchema), v.array(v.lazy(() => FSchema))]),
	),
});

export type ModelFLikeData = {
	f?: FData | FData[];
};
