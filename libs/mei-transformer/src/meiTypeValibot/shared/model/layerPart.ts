import * as v from "valibot";

/**
 * Groups elements that represent layer parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.html
 */
export const LayerPartSchema = v.object({
  // TODO: Add layer part elements
});

export type LayerPartData = v.InferOutput<typeof LayerPartSchema>;
