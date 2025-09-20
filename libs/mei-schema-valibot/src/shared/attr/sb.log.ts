import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sb.log.html
 */
export const AttrSbLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
});

export type AttrSbLogData = v.InferOutput<typeof AttrSbLogSchema>;
