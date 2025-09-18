import * as v from "valibot";

/**
 * Attributes for tuning logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.log.html
 */
export const AttrTuningLogSchema = v.object({
  // TODO: Add tuning logging attributes
});

export type AttrTuningLogData = v.InferOutput<typeof AttrTuningLogSchema>;
