import * as v from "valibot";

/**
 * Attributes for tuning.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.anl.html
 */
export const AttrTuningAnlSchema = v.object({
  // TODO: Add tuning.anl attributes
});

export type AttrTuningAnlData = v.InferOutput<typeof AttrTuningAnlSchema>;
