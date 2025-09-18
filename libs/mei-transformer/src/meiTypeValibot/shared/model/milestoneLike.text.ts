import * as v from "valibot";

/**
 * Groups elements that represent milestone-like elements in text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.milestoneLike.text.html
 */
export const MilestoneLikeTextSchema = v.object({
  // TODO: Add milestone-like text elements
});

export type MilestoneLikeTextData = v.InferOutput<typeof MilestoneLikeTextSchema>;
