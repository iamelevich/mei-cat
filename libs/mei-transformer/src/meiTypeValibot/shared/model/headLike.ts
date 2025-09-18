import * as v from "valibot";

/**
 * Groups elements that represent head-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.headLike.html
 */
export const HeadLikeSchema = v.object({
  // TODO: Add head-like elements
});

export type HeadLikeData = v.InferOutput<typeof HeadLikeSchema>;
