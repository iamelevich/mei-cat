import * as v from "valibot";

/**
 * Attributes for score definition logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.log.html
 */
export const AttrScoreDefLogSchema = v.object({
  // TODO: Add score definition logging attributes
});

export type AttrScoreDefLogData = v.InferOutput<typeof AttrScoreDefLogSchema>;
