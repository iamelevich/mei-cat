import * as v from "valibot";
import { type PartsData, PartsSchema } from "../element/parts";

/**
 * Groups elements that collect separate performer parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.partsLike.html
 */
export const ModelPartsLikeSchema: v.GenericSchema<ModelPartsLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Provides a container for performers' parts.
			 * @see https://music-encoding.org/guidelines/v5/elements/parts.html
			 */
			parts: v.optional(v.union([PartsSchema, v.array(PartsSchema)])),
		}),
);

export type ModelPartsLikeData = {
	parts?: PartsData | PartsData[];
};
