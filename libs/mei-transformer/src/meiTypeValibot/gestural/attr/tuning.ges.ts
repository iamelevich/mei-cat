import * as v from "valibot";

/**
 * Attributes for tuning.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.ges.html
 */
export const AttrTuningGesSchema = v.object({
  // TODO: Add tuning.ges attributes
});

export type AttrTuningGesData = v.InferOutput<typeof AttrTuningGesSchema>;
