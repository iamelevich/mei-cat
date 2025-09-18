import * as v from "valibot";

/**
 * Groups elements that represent score definition-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.scoreDefLike.html
 */
export const ScoreDefLikeSchema = v.object({
  // TODO: Add score definition-like elements
});

export type ScoreDefLikeData = v.InferOutput<typeof ScoreDefLikeSchema>;
