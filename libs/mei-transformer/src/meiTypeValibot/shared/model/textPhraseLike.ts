import * as v from "valibot";

/**
 * Groups elements that represent text phrase-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textPhraseLike.html
 */
export const TextPhraseLikeSchema = v.object({
  // TODO: Add text phrase-like elements
});

export type TextPhraseLikeData = v.InferOutput<typeof TextPhraseLikeSchema>;
