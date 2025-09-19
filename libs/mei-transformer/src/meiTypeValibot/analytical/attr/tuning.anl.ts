import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.anl.html
 */
export const AttrTuningAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTuningAnlData = v.InferOutput<typeof AttrTuningAnlSchema>;
