import * as v from "valibot";

/**
 * Groups elements that represent responsibility-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.respLike.html
 */
export const RespLikeSchema = v.object({
  // TODO: Add responsibility-like elements
});

export type RespLikeData = v.InferOutput<typeof RespLikeSchema>;
