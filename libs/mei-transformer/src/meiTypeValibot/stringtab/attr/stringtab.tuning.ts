import * as v from "valibot";

/**
 * Attributes for stringtab.tuning.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stringtab.tuning.html
 */
export const AttrStringtabTuningSchema = v.object({
  // TODO: Add stringtab.tuning attributes
});

export type AttrStringtabTuningData = v.InferOutput<typeof AttrStringtabTuningSchema>;
