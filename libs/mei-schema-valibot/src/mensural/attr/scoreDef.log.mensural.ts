import * as v from "valibot";
import { AttrMensuralLogSchema } from "./mensural.log";

/**
 * Logical domain attributes for a score in the mensural repertoire. The values set in these attributes act as score-wide defaults for attributes that are not set in descendant elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.log.mensural.html
 */
export const AttrScoreDefLogMensuralSchema = v.object({
	// Inherited attribute classes
	...AttrMensuralLogSchema.entries,
});

export type AttrScoreDefLogMensuralData = v.InferOutput<
	typeof AttrScoreDefLogMensuralSchema
>;
