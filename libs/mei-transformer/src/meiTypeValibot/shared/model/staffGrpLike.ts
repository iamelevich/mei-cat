import * as v from "valibot";

/**
 * Groups elements that represent staff group-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffGrpLike.html
 */
export const StaffGrpLikeSchema = v.object({
  // TODO: Add staff group-like elements
});

export type StaffGrpLikeData = v.InferOutput<typeof StaffGrpLikeSchema>;
