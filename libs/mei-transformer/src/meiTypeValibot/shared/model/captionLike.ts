import * as v from "valibot";

/**
 * Groups elements that represent caption-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.captionLike.html
 */
export const CaptionLikeSchema = v.object({
  // TODO: Add caption-like elements
});

export type CaptionLikeData = v.InferOutput<typeof CaptionLikeSchema>;
