import * as v from "valibot";

/**
 * Groups elements that represent section parts in common music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.cmn.html
 */
export const SectionPartCmnSchema = v.object({
  // TODO: Add CMN section part elements
});

export type SectionPartCmnData = v.InferOutput<typeof SectionPartCmnSchema>;
