import * as v from "valibot";
import { AttrBeamingLogSchema } from "../attr/beaming.log";

/**
 * Logical domain attributes for staffDef in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.log.cmn.html
 */
export const AttrStaffDefLogCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamingLogSchema.entries,
});

export type AttrStaffDefLogCmnData = v.InferOutput<
	typeof AttrStaffDefLogCmnSchema
>;
