import * as v from "valibot";
import { AttrMensuralVisSchema } from "../../visual";

/**
 * Visual domain attributes for scoreDef in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.mensural.html
 */
export const AttrScoreDefVisMensuralSchema = v.object({
	// Inherited attribute classes
	...AttrMensuralVisSchema.entries,
});

export type AttrScoreDefVisMensuralData = v.InferOutput<
	typeof AttrScoreDefVisMensuralSchema
>;
