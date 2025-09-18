import * as v from "valibot";

/**
 * Attributes for duration ratio.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.ratio.html
 */
export const AttrDurationRatioSchema = v.object({
  // TODO: Add duration ratio attributes
});

export type AttrDurationRatioData = v.InferOutput<typeof AttrDurationRatioSchema>;
