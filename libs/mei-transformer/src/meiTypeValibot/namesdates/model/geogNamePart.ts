import * as v from "valibot";

/**
 * Groups elements that represent geographical name parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.geogNamePart.html
 */
export const GeogNamePartSchema = v.object({
  // TODO: Add geographical name part elements
});

export type GeogNamePartData = v.InferOutput<typeof GeogNamePartSchema>;
