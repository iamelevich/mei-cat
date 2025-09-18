import * as v from "valibot";

/**
 * Groups elements that represent folium-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.foliumLike.html
 */
export const FoliumLikeSchema = v.object({
  // TODO: Add folium-like elements
});

export type FoliumLikeData = v.InferOutput<typeof FoliumLikeSchema>;
