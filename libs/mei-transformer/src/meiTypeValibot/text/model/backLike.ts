import * as v from "valibot";
import { type BackData, BackSchema } from "../element/back";

/**
 * Groups elements that may contain back matter.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.backLike.html
 */
export const ModelBackLikeSchema: v.GenericSchema<ModelBackLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Contains any appendixes, advertisements, indexes, etc. following the main body of a musical text.
			 * @see https://music-encoding.org/guidelines/v5/elements/back.html
			 */
			back: v.optional(v.union([BackSchema, v.array(BackSchema)])),
		}),
);

export type ModelBackLikeData = {
	back?: BackData | BackData[];
};
