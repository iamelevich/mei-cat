import * as v from "valibot";

/**
 * Groups elements that represent dimension-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.dimLike.html
 */
export const DimLikeSchema = v.object({
  // TODO: Add dimension-like elements
});

export type DimLikeData = v.InferOutput<typeof DimLikeSchema>;
