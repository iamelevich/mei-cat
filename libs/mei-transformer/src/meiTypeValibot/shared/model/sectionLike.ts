import * as v from "valibot";

/**
 * Groups elements that represent section-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionLike.html
 */
export const SectionLikeSchema = v.object({
  // TODO: Add section-like elements
});

export type SectionLikeData = v.InferOutput<typeof SectionLikeSchema>;
