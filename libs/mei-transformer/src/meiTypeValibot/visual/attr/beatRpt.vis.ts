import * as v from "valibot";

/**
 * Attributes for beatRpt.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.vis.html
 */
export const AttrBeatRptVisSchema = v.object({
  // TODO: Add beatRpt.vis attributes
});

export type AttrBeatRptVisData = v.InferOutput<typeof AttrBeatRptVisSchema>;
