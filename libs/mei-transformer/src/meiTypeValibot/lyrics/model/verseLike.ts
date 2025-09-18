import * as v from "valibot";

/**
 * Groups elements that represent verselike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.verseLike.html
 */
export const VerseLikeSchema = v.object({
  // TODO: Add verselike elements
});

export type VerseLikeData = v.InferOutput<typeof VerseLikeSchema>;
