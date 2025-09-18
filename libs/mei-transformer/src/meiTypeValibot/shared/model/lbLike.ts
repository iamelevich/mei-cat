import * as v from "valibot";

/**
 * Groups elements that represent line break-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.lbLike.html
 */
export const LbLikeSchema = v.object({
  // TODO: Add line break-like elements
});

export type LbLikeData = v.InferOutput<typeof LbLikeSchema>;
