import * as v from "valibot";

/**
 * Groups elements that represent section parts in mensural and neumes notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.mensuralAndNeumes.html
 */
export const SectionPartMensuralAndNeumesSchema = v.object({
  // TODO: Add section part mensural and neumes elements
});

export type SectionPartMensuralAndNeumesData = v.InferOutput<typeof SectionPartMensuralAndNeumesSchema>;
