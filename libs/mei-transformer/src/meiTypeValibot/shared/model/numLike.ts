import * as v from "valibot";

/**
 * Groups elements that represent number-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.numLike.html
 */
export const NumLikeSchema = v.object({
  // TODO: Add number-like elements
});

export type NumLikeData = v.InferOutput<typeof NumLikeSchema>;
