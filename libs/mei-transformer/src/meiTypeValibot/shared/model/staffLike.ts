import * as v from "valibot";

/**
 * Groups elements that represent staff-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffLike.html
 */
export const StaffLikeSchema = v.object({
  // TODO: Add staff-like elements
});

export type StaffLikeData = v.InferOutput<typeof StaffLikeSchema>;
