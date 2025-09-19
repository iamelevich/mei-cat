import * as v from "valibot";

/**
 * Visual domain attributes for scoreDef in the tablature repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.tablature.html
 */
export const AttrScoreDefVisTablatureSchema = v.object({
	// No attributes in MEI schema
});

export type AttrScoreDefVisTablatureData = v.InferOutput<
	typeof AttrScoreDefVisTablatureSchema
>;
