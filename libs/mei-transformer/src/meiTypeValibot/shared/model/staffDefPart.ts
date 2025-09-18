import * as v from "valibot";

/**
 * Groups elements that represent staff definition parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffDefPart.html
 */
export const StaffDefPartSchema = v.object({
  // TODO: Add staff definition part elements
});

export type StaffDefPartData = v.InferOutput<typeof StaffDefPartSchema>;
