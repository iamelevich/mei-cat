import * as v from "valibot";

/**
 * Groups elements that represent name-like elements for places.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.place.html
 */
export const NameLikePlaceSchema = v.object({
  // TODO: Add name-like place elements
});

export type NameLikePlaceData = v.InferOutput<typeof NameLikePlaceSchema>;
