import * as v from "valibot";

/**
 * Groups elements that represent score-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.scoreLike.html
 */
export const ScoreLikeSchema = v.object({
  // TODO: Add score-like elements
});

export type ScoreLikeData = v.InferOutput<typeof ScoreLikeSchema>;
