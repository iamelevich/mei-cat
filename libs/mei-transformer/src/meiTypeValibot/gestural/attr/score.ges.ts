import * as v from "valibot";

/**
 * Attributes for score.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.score.ges.html
 */
export const AttrScoreGesSchema = v.object({
  // TODO: Add score.ges attributes
});

export type AttrScoreGesData = v.InferOutput<typeof AttrScoreGesSchema>;
