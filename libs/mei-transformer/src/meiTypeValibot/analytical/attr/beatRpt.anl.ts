import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.anl.html
 */
export const AttrBeatRptAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBeatRptAnlData = v.InferOutput<typeof AttrBeatRptAnlSchema>;
