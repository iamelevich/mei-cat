import * as v from "valibot";

/**
 * Groups elements that represent app-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.appLike.html
 */
export const AppLikeSchema = v.object({
  // TODO: Add app-like elements
});

export type AppLikeData = v.InferOutput<typeof AppLikeSchema>;
