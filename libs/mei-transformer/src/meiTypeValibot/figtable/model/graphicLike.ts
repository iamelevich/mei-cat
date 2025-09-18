import * as v from "valibot";

/**
 * Groups elements that represent graphic-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.graphicLike.html
 */
export const GraphicLikeSchema = v.object({
  // TODO: Add graphic-like elements
});

export type GraphicLikeData = v.InferOutput<typeof GraphicLikeSchema>;
