import * as v from "valibot";

/**
 * Groups elements that represent name-like elements for geographical names.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.geogName.html
 */
export const NameLikeGeogNameSchema = v.object({
  // TODO: Add name-like geographical name elements
});

export type NameLikeGeogNameData = v.InferOutput<typeof NameLikeGeogNameSchema>;
