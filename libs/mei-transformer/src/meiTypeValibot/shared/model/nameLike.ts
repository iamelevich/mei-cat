import * as v from "valibot";

/**
 * Groups elements that represent name-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.html
 */
export const NameLikeSchema = v.object({
  // TODO: Add name-like elements
});

export type NameLikeData = v.InferOutput<typeof NameLikeSchema>;
