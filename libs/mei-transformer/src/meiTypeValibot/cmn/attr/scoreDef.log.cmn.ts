import * as v from "valibot";
import { AttrBeamingLogSchema } from "../attr/beaming.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.log.cmn.html
 */
export const AttrScoreDefLogCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamingLogSchema.entries,
});

export type AttrScoreDefLogCmnData = v.InferOutput<
	typeof AttrScoreDefLogCmnSchema
>;
