import * as v from "valibot";

/**
 * Attributes for scoreDef.vis.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.cmn.html
 */
export const AttrScoreDefVisCmnSchema = v.object({
	// TODO: Add scoreDef.vis.cmn attributes
});

export type AttrScoreDefVisCmnData = v.InferOutput<
	typeof AttrScoreDefVisCmnSchema
>;
