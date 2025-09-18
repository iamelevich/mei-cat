import * as v from "valibot";

/**
 * Attributes for beatRpt.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.log.html
 */
export const AttrBeatRptLogSchema = v.object({
  // TODO: Add beatRpt.log attributes
});

export type AttrBeatRptLogData = v.InferOutput<typeof AttrBeatRptLogSchema>;
