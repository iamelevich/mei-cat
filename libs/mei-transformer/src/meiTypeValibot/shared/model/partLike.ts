import * as v from "valibot";

/**
 * Groups elements that represent part-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.partLike.html
 */
export const PartLikeSchema = v.object({
  // TODO: Add part-like elements
});

export type PartLikeData = v.InferOutput<typeof PartLikeSchema>;
