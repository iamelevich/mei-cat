import * as v from "valibot";

/**
 * Groups elements that represent manifestation-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.manifestationLike.html
 */
export const ManifestationLikeSchema = v.object({
  // TODO: Add manifestation-like elements
});

export type ManifestationLikeData = v.InferOutput<typeof ManifestationLikeSchema>;
