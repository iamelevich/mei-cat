import * as v from "valibot";
import { type IncipData, IncipSchema } from "../element/incip";

/**
 * Groups elements used to represent a textual or musical incipit.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.incipLike.html
 */
export const ModelIncipLikeSchema: v.GenericSchema<ModelIncipLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * The opening music and/or words of a musical or textual work.
			 * @see https://music-encoding.org/guidelines/v5/elements/incip.html
			 */
			incip: v.optional(v.union([v.array(IncipSchema), IncipSchema])),
		}),
);

export type ModelIncipLikeData = {
	incip?: IncipData | IncipData[];
};
