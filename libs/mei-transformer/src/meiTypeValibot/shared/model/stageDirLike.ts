import * as v from "valibot";

/**
 * Groups elements that represent stage directions.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.stageDirLike.html
 */
export const StageDirLikeSchema = v.object({
  // TODO: Add stage direction elements
});

export type StageDirLikeData = v.InferOutput<typeof StageDirLikeSchema>;
