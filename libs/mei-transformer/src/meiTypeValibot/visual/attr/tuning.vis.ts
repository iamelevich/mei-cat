import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.vis.html
 */
export const AttrTuningVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTuningVisData = v.InferOutput<typeof AttrTuningVisSchema>;
