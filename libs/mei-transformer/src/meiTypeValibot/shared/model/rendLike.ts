import * as v from "valibot";

/**
 * Groups elements that represent rendition-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rendLike.html
 */
export const RendLikeSchema = v.object({
  // TODO: Add rendition-like elements
});

export type RendLikeData = v.InferOutput<typeof RendLikeSchema>;
