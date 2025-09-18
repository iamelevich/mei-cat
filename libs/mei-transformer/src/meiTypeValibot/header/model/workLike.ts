import * as v from "valibot";

/**
 * Groups elements that represent work-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.workLike.html
 */
export const WorkLikeSchema = v.object({
  // TODO: Add work-like elements
});

export type WorkLikeData = v.InferOutput<typeof WorkLikeSchema>;
