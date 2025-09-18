import * as v from "valibot";

/**
 * Groups elements that represent staff parts in mensural and neumes notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffPart.mensuralAndNeumes.html
 */
export const StaffPartMensuralAndNeumesSchema = v.object({
  // TODO: Add staff part mensural and neumes elements
});

export type StaffPartMensuralAndNeumesData = v.InferOutput<typeof StaffPartMensuralAndNeumesSchema>;
