import * as v from "valibot";

/**
 * Attributes for beatRpt.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.ges.html
 */
export const AttrBeatRptGesSchema = v.object({
  // TODO: Add beatRpt.ges attributes
});

export type AttrBeatRptGesData = v.InferOutput<typeof AttrBeatRptGesSchema>;
