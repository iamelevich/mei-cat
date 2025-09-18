import * as v from "valibot";

/**
 * Groups elements that represent name-like elements for labels.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.label.html
 */
export const NameLikeLabelSchema = v.object({
  // TODO: Add name-like label elements
});

export type NameLikeLabelData = v.InferOutput<typeof NameLikeLabelSchema>;
