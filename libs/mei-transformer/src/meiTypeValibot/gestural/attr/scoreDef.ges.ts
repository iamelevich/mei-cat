import * as v from "valibot";

/**
 * Attributes for scoreDef.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.ges.html
 */
export const AttrScoreDefGesSchema = v.object({
  // TODO: Add scoreDef.ges attributes
});

export type AttrScoreDefGesData = v.InferOutput<typeof AttrScoreDefGesSchema>;
