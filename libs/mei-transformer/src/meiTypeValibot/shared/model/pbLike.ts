import * as v from "valibot";

/**
 * Groups elements that represent page break-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pbLike.html
 */
export const PbLikeSchema = v.object({
  // TODO: Add page break-like elements
});

export type PbLikeData = v.InferOutput<typeof PbLikeSchema>;
