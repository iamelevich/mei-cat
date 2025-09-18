import * as v from "valibot";

/**
 * Attributes for tuning.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.vis.html
 */
export const AttrTuningVisSchema = v.object({
  // TODO: Add tuning.vis attributes
});

export type AttrTuningVisData = v.InferOutput<typeof AttrTuningVisSchema>;
