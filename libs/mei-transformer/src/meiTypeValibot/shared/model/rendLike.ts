import * as v from "valibot";
import { type RendData, RendSchema } from "../element/rend";
import { type StackData, StackSchema } from "../element/stack";

/**
 * Groups elements that mark typographical features.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rendLike.html
 */
export const ModelRendLikeSchema: v.GenericSchema<ModelRendLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * A formatting element indicating special visual rendering, e.g. , bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: v.optional(v.union([RendSchema, v.array(RendSchema)])),
			/**
			 * An inline table with a single column.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: v.optional(v.union([StackSchema, v.array(StackSchema)])),
		}),
);

export type ModelRendLikeData = {
	rend?: RendData | RendData[];
	stack?: StackData | StackData[];
};
