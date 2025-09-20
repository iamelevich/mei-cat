import * as v from "valibot";
import { AttrEventSchema } from "../../shared/attr/event";
import { AttrNumberedSchema } from "./numbered";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.log.html
 */
export const AttrMultiRptLogSchema = v.object({
	// Inherited attribute classes
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
});

export type AttrMultiRptLogData = v.InferOutput<typeof AttrMultiRptLogSchema>;
