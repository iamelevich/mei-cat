import * as v from "valibot";

/**
 * Groups elements that represent verses.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.verseLike.html
 */
export const VerseLikeSchema = v.object({
  // TODO: Add verse elements
});

export type VerseLikeData = v.InferOutput<typeof VerseLikeSchema>;
