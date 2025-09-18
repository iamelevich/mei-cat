import * as v from "valibot";

/**
 * Groups elements that represent key accidental-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.keyAccidLike.html
 */
export const KeyAccidLikeSchema = v.object({
  // TODO: Add key accidental-like elements
});

export type KeyAccidLikeData = v.InferOutput<typeof KeyAccidLikeSchema>;
