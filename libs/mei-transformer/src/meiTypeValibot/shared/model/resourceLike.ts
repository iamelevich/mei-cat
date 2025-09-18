import * as v from "valibot";

/**
 * Groups elements that represent resource-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.resourceLike.html
 */
export const ResourceLikeSchema = v.object({
  // TODO: Add resource-like elements
});

export type ResourceLikeData = v.InferOutput<typeof ResourceLikeSchema>;
