import * as v from "valibot";

/**
 * Groups elements that represent item-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.itemLike.html
 */
export const ItemLikeSchema = v.object({
  // TODO: Add item-like elements
});

export type ItemLikeData = v.InferOutput<typeof ItemLikeSchema>;
