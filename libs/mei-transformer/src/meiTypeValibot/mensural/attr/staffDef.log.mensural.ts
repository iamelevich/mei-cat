import * as v from "valibot";
import { AttrMensuralLogSchema } from "..";

/**
 * Logical domain attributes for staffDef in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.log.mensural.html
 */
export const AttrStaffDefLogMensuralSchema = v.object({
	// Inherited attribute classes
	...AttrMensuralLogSchema.entries,
});

export type AttrStaffDefLogMensuralData = v.InferOutput<
	typeof AttrStaffDefLogMensuralSchema
>;
