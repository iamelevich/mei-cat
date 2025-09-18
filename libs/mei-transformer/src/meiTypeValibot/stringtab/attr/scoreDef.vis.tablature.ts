import * as v from "valibot";

/**
 * Attributes for scoreDef.vis.tablature.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.tablature.html
 */
export const AttrScoreDefVisTablatureSchema = v.object({
  // TODO: Add scoreDef.vis.tablature attributes
});

export type AttrScoreDefVisTablatureData = v.InferOutput<typeof AttrScoreDefVisTablatureSchema>;
