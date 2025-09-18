import * as v from "valibot";

/**
 * Groups elements that represent bifolium-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.bifoliumLike.html
 */
export const BifoliumLikeSchema = v.object({
  // TODO: Add bifolium-like elements
});

export type BifoliumLikeData = v.InferOutput<typeof BifoliumLikeSchema>;
