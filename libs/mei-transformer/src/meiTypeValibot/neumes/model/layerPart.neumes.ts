import * as v from "valibot";

/**
 * Groups elements that represent layerpart.neumes parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.neumes.html
 */
export const LayerPartNeumesSchema = v.object({
  // TODO: Add layerpart.neumes elements
});

export type LayerPartNeumesData = v.InferOutput<typeof LayerPartNeumesSchema>;
