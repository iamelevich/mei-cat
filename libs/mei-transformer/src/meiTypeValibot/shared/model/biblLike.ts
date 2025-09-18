import * as v from "valibot";

/**
 * Groups elements that represent bibliographic-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.biblLike.html
 */
export const BiblLikeSchema = v.object({
  // TODO: Add bibliographic-like elements
});

export type BiblLikeData = v.InferOutput<typeof BiblLikeSchema>;
