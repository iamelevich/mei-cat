import * as v from "valibot";

/**
 * Groups elements that represent stagedirlike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.stageDirLike.html
 */
export const StageDirLikeSchema = v.object({
  // TODO: Add stagedirlike elements
});

export type StageDirLikeData = v.InferOutput<typeof StageDirLikeSchema>;
