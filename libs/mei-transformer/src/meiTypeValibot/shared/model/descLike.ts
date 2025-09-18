import * as v from "valibot";

/**
 * Groups elements that represent description-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.descLike.html
 */
export const DescLikeSchema = v.object({
  // TODO: Add description-like elements
});

export type DescLikeData = v.InferOutput<typeof DescLikeSchema>;
