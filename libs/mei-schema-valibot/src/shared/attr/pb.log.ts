import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.log.html
 */
export const AttrPbLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
});

export type AttrPbLogData = v.InferOutput<typeof AttrPbLogSchema>;
