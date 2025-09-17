import * as v from "valibot";

/**
 * Groups elements that represent layer parts in common music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.cmn.html
 */
export const LayerPartCmnSchema = v.object({
  // TODO: Add CMN layer part elements
});

export type LayerPartCmnData = v.InferOutput<typeof LayerPartCmnSchema>;
