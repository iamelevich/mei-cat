import * as v from "valibot";

/**
 * Groups elements that represent ending-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.endingLike.html
 */
export const EndingLikeSchema = v.object({
  // TODO: Add ending-like elements
});

export type EndingLikeData = v.InferOutput<typeof EndingLikeSchema>;
