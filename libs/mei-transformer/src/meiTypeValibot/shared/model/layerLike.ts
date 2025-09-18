import * as v from "valibot";

/**
 * Groups elements that represent layers.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerLike.html
 */
export const LayerLikeSchema = v.object({
  // TODO: Add layer elements
});

export type LayerLikeData = v.InferOutput<typeof LayerLikeSchema>;
