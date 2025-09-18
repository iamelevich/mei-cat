import * as v from "valibot";

/**
 * Groups elements that represent date-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.dateLike.html
 */
export const DateLikeSchema = v.object({
  // TODO: Add date-like elements
});

export type DateLikeData = v.InferOutput<typeof DateLikeSchema>;
