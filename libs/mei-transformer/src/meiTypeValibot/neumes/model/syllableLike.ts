import * as v from "valibot";

/**
 * Groups elements that represent syllablelike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.syllableLike.html
 */
export const SyllableLikeSchema = v.object({
  // TODO: Add syllablelike elements
});

export type SyllableLikeData = v.InferOutput<typeof SyllableLikeSchema>;
