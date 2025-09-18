import * as v from "valibot";

/**
 * Groups elements that represent label-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.labelLike.html
 */
export const LabelLikeSchema = v.object({
  // TODO: Add label-like elements
});

export type LabelLikeData = v.InferOutput<typeof LabelLikeSchema>;
