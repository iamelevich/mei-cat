import * as v from "valibot";

/**
 * Attributes for score.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.score.anl.html
 */
export const AttrScoreAnlSchema = v.object({
  // TODO: Add score.anl attributes
});

export type AttrScoreAnlData = v.InferOutput<typeof AttrScoreAnlSchema>;
