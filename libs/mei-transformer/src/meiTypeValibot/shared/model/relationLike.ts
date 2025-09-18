import * as v from "valibot";

/**
 * Groups elements that represent relation-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.relationLike.html
 */
export const RelationLikeSchema = v.object({
  // TODO: Add relation-like elements
});

export type RelationLikeData = v.InferOutput<typeof RelationLikeSchema>;
