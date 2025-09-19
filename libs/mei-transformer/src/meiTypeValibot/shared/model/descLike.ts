import * as v from "valibot";
import { type DescData, DescSchema } from "../element/desc";

/**
 * Groups elements which provide a description of their parent entity.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.descLike.html
 */
export const ModelDescLikeSchema: v.GenericSchema<ModelDescLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(v.union([DescSchema, v.array(DescSchema)])),
		}),
);

export type ModelDescLikeData = {
	desc?: DescData | DescData[];
};
