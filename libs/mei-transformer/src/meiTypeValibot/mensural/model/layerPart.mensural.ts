import * as v from "valibot";

/**
 * Groups elements that represent layerpart.mensural parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.mensural.html
 */
export const LayerPartMensuralSchema = v.object({
  // TODO: Add layerpart.mensural elements
});

export type LayerPartMensuralData = v.InferOutput<typeof LayerPartMensuralSchema>;
