import * as v from "valibot";

/**
 * Attributes for score.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.score.vis.html
 */
export const AttrScoreVisSchema = v.object({
  // TODO: Add score.vis attributes
});

export type AttrScoreVisData = v.InferOutput<typeof AttrScoreVisSchema>;
