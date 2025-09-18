import * as v from "valibot";

/**
 * Groups elements that represent title-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.titleLike.html
 */
export const TitleLikeSchema = v.object({
  // TODO: Add title-like elements
});

export type TitleLikeData = v.InferOutput<typeof TitleLikeSchema>;
