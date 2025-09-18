import * as v from "valibot";

/**
 * Groups elements that represent figure description-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.figDescLike.html
 */
export const FigDescLikeSchema = v.object({
  // TODO: Add figure description-like elements
});

export type FigDescLikeData = v.InferOutput<typeof FigDescLikeSchema>;
