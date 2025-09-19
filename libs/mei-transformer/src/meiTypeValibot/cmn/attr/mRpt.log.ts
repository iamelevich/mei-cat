import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrNumberedSchema } from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.log.html
 */
export const AttrMRptLogSchema = v.object({
	// Inherited attribute classes
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
});

export type AttrMRptLogData = v.InferOutput<typeof AttrMRptLogSchema>;
