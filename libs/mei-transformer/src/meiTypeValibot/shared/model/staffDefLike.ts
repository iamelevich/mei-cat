import * as v from "valibot";

/**
 * Groups elements that represent staff definition-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffDefLike.html
 */
export const StaffDefLikeSchema = v.object({
  // TODO: Add staff definition-like elements
});

export type StaffDefLikeData = v.InferOutput<typeof StaffDefLikeSchema>;
