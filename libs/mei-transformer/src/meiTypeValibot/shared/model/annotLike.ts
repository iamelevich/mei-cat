import * as v from "valibot";

/**
 * Groups elements that represent annotation-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.annotLike.html
 */
export const AnnotLikeSchema = v.object({
  // TODO: Add annotation-like elements
});

export type AnnotLikeData = v.InferOutput<typeof AnnotLikeSchema>;
