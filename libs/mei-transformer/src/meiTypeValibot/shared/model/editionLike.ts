import * as v from "valibot";

/**
 * Groups elements that represent edition-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editionLike.html
 */
export const EditionLikeSchema = v.object({
  // TODO: Add edition-like elements
});

export type EditionLikeData = v.InferOutput<typeof EditionLikeSchema>;
