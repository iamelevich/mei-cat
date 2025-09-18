import * as v from "valibot";

/**
 * Groups elements that represent parts-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.partsLike.html
 */
export const PartsLikeSchema = v.object({
  // TODO: Add parts-like elements
});

export type PartsLikeData = v.InferOutput<typeof PartsLikeSchema>;
