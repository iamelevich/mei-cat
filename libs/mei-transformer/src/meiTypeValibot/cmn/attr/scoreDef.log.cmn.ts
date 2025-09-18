import * as v from "valibot";

/**
 * Attributes for scoreDef.log.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.log.cmn.html
 */
export const AttrScoreDefLogCmnSchema = v.object({
	// TODO: Add scoreDef.log.cmn attributes
});

export type AttrScoreDefLogCmnData = v.InferOutput<
	typeof AttrScoreDefLogCmnSchema
>;
