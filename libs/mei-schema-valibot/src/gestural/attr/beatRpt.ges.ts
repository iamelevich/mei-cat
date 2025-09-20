import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beatRpt.ges.html
 */
export const AttrBeatRptGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBeatRptGesData = v.InferOutput<typeof AttrBeatRptGesSchema>;
