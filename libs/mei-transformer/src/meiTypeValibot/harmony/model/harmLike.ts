import * as v from "valibot";
import { type HarmData, HarmSchema } from "../element/harm";

/**
 * Groups elements that record indications of harmony.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.harmLike.html
 */
export const ModelHarmLikeSchema: v.GenericSchema<ModelHarmLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * An indication of harmony, e.g. , chord names, tablature grids, harmonic analysis, figured bass.
			 * @see https://music-encoding.org/guidelines/v5/elements/harm.html
			 */
			harm: v.optional(v.union([HarmSchema, v.array(HarmSchema)])),
		}),
);

export type ModelHarmLikeData = {
	harm?: HarmData | HarmData[];
};
