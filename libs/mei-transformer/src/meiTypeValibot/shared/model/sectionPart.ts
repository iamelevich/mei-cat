import * as v from "valibot";

/**
 * Groups elements that represent section parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.html
 */
export const SectionPartSchema = v.object({
  // TODO: Add section part elements
});

export type SectionPartData = v.InferOutput<typeof SectionPartSchema>;
