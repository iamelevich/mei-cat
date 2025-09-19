import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.score.vis.html
 */
export const AttrScoreVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrScoreVisData = v.InferOutput<typeof AttrScoreVisSchema>;
