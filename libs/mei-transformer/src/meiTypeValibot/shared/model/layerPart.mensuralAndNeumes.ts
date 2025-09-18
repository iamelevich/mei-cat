import * as v from "valibot";

/**
 * Groups elements that represent layer parts in mensural and neumes notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.mensuralAndNeumes.html
 */
export const LayerPartMensuralAndNeumesSchema = v.object({
  // TODO: Add layer part mensural and neumes elements
});

export type LayerPartMensuralAndNeumesData = v.InferOutput<typeof LayerPartMensuralAndNeumesSchema>;
