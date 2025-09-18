import * as v from "valibot";

/**
 * Attributes for multinum measures.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multinumMeasures.html
 */
export const AttrMultinumMeasuresSchema = v.object({
  // TODO: Add multinum measures attributes
});

export type AttrMultinumMeasuresData = v.InferOutput<typeof AttrMultinumMeasuresSchema>;
