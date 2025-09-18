import * as v from "valibot";

/**
 * Attributes for score logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.score.log.html
 */
export const AttrScoreLogSchema = v.object({
  // TODO: Add score logging attributes
});

export type AttrScoreLogData = v.InferOutput<typeof AttrScoreLogSchema>;
