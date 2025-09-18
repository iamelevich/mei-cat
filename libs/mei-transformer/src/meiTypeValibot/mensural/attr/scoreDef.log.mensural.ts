import * as v from "valibot";

/**
 * Attributes for scoreDef.log.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.log.mensural.html
 */
export const AttrScoreDefLogMensuralSchema = v.object({
  // TODO: Add scoreDef.log.mensural attributes
});

export type AttrScoreDefLogMensuralData = v.InferOutput<typeof AttrScoreDefLogMensuralSchema>;
