import * as v from "valibot";

/**
 * Groups elements that represent layer definition-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerDefLike.html
 */
export const LayerDefLikeSchema = v.object({
  // TODO: Add layer definition-like elements
});

export type LayerDefLikeData = v.InferOutput<typeof LayerDefLikeSchema>;
