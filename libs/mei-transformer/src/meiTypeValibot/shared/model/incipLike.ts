import * as v from "valibot";

/**
 * Groups elements that represent incipit-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.incipLike.html
 */
export const IncipLikeSchema = v.object({
  // TODO: Add incipit-like elements
});

export type IncipLikeData = v.InferOutput<typeof IncipLikeSchema>;
