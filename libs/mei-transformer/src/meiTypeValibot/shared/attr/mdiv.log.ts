import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mdiv.log.html
 */
export const AttrMdivLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
});

export type AttrMdivLogData = v.InferOutput<typeof AttrMdivLogSchema>;
