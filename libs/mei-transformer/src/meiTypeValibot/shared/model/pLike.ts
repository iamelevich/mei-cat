import * as v from "valibot";

/**
 * Groups elements that represent paragraph-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pLike.html
 */
export const PLikeSchema = v.object({
  // TODO: Add paragraph-like elements
});

export type PLikeData = v.InferOutput<typeof PLikeSchema>;
