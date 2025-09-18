import * as v from "valibot";

/**
 * Attributes for scoreDef.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.html
 */
export const AttrScoreDefVisSchema = v.object({
  // TODO: Add scoreDef.vis attributes
});

export type AttrScoreDefVisData = v.InferOutput<typeof AttrScoreDefVisSchema>;
