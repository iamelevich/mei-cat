import * as v from "valibot";

/**
 * Groups elements that represent staff parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffPart.html
 */
export const StaffPartSchema = v.object({
  // TODO: Add staff part elements
});

export type StaffPartData = v.InferOutput<typeof StaffPartSchema>;
