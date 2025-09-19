import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.score.anl.html
 */
export const AttrScoreAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrScoreAnlData = v.InferOutput<typeof AttrScoreAnlSchema>;
