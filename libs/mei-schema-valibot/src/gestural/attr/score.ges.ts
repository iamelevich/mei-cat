import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.score.ges.html
 */
export const AttrScoreGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrScoreGesData = v.InferOutput<typeof AttrScoreGesSchema>;
