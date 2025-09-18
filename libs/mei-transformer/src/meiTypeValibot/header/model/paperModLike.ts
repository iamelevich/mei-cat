import * as v from "valibot";

/**
 * Groups elements that represent paper modification-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.paperModLike.html
 */
export const PaperModLikeSchema = v.object({
  // TODO: Add paper modification-like elements
});

export type PaperModLikeData = v.InferOutput<typeof PaperModLikeSchema>;
