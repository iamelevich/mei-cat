import * as v from "valibot";

/**
 * Groups elements that represent harmony.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.harmLike.html
 */
export const HarmLikeSchema = v.object({
  // TODO: Add harmony elements
});

export type HarmLikeData = v.InferOutput<typeof HarmLikeSchema>;
