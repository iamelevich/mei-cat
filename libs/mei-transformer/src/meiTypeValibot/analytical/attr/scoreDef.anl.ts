import * as v from "valibot";

/**
 * Attributes for scoreDef.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.anl.html
 */
export const AttrScoreDefAnlSchema = v.object({
  // TODO: Add scoreDef.anl attributes
});

export type AttrScoreDefAnlData = v.InferOutput<typeof AttrScoreDefAnlSchema>;
