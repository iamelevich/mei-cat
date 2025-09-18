import * as v from "valibot";

/**
 * Attributes for beatRpt.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.anl.html
 */
export const AttrBeatRptAnlSchema = v.object({
  // TODO: Add beatRpt.anl attributes
});

export type AttrBeatRptAnlData = v.InferOutput<typeof AttrBeatRptAnlSchema>;
