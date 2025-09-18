import * as v from "valibot";

/**
 * Groups elements that represent figured bass-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.figbassLike.html
 */
export const FigbassLikeSchema = v.object({
  // TODO: Add figured bass-like elements
});

export type FigbassLikeData = v.InferOutput<typeof FigbassLikeSchema>;
