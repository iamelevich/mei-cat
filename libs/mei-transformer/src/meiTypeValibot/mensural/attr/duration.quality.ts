import * as v from "valibot";

/**
 * Attributes for duration.quality.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.quality.html
 */
export const AttrDurationQualitySchema = v.object({
  // TODO: Add duration.quality attributes
});

export type AttrDurationQualityData = v.InferOutput<typeof AttrDurationQualitySchema>;
