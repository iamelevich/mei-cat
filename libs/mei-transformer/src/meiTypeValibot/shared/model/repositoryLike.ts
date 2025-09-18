import * as v from "valibot";

/**
 * Groups elements that represent repository-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.repositoryLike.html
 */
export const RepositoryLikeSchema = v.object({
  // TODO: Add repository-like elements
});

export type RepositoryLikeData = v.InferOutput<typeof RepositoryLikeSchema>;
