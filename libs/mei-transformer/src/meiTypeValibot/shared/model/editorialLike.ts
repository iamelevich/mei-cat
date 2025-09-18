import * as v from "valibot";

/**
 * Groups elements that represent editorial-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editorialLike.html
 */
export const EditorialLikeSchema = v.object({
  // TODO: Add editorial-like elements
});

export type EditorialLikeData = v.InferOutput<typeof EditorialLikeSchema>;
