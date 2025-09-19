import * as v from "valibot";
import { AttrEventSchema } from "../../shared/attr/event";
import { AttrNumberedSchema } from "../attr/numbered";

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
