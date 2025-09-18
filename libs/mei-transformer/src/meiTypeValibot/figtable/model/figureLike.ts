import * as v from "valibot";

/**
 * Groups elements that represent figure-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.figureLike.html
 */
export const FigureLikeSchema = v.object({
  // TODO: Add figure-like elements
});

export type FigureLikeData = v.InferOutput<typeof FigureLikeSchema>;
