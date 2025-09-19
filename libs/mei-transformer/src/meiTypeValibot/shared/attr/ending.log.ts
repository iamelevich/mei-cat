import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.log.html
 */
export const AttrEndingLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
});

export type AttrEndingLogData = v.InferOutput<typeof AttrEndingLogSchema>;
