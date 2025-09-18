import * as v from "valibot";

/**
 * Attributes for scoreDef.vis.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.mensural.html
 */
export const AttrScoreDefVisMensuralSchema = v.object({
  // TODO: Add scoreDef.vis.mensural attributes
});

export type AttrScoreDefVisMensuralData = v.InferOutput<typeof AttrScoreDefVisMensuralSchema>;
