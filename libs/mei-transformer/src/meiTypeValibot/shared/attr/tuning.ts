import * as v from "valibot";

/**
 * Attributes for tuning.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.html
 */
export const AttrTuningSchema = v.object({
  // TODO: Add tuning attributes
});

export type AttrTuningData = v.InferOutput<typeof AttrTuningSchema>;
