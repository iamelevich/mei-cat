import * as v from "valibot";
import { type AnnotData, AnnotSchema } from "../element/annot";

/**
 * Groups annotation-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.annotLike.html
 */
export const ModelAnnotLikeSchema: v.GenericSchema<ModelAnnotLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: v.optional(v.union([AnnotSchema, v.array(AnnotSchema)])),
		}),
);

export type ModelAnnotLikeData = {
	annot?: AnnotData | AnnotData[];
};
