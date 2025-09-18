import * as v from "valibot";

/**
 * Groups elements that represent harmony-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.harmLike.html
 */
export const HarmLikeSchema = v.object({
  // TODO: Add harmony-like elements
});

export type HarmLikeData = v.InferOutput<typeof HarmLikeSchema>;
