import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.log.html
 */
export const AttrSectionLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
});

export type AttrSectionLogData = v.InferOutput<typeof AttrSectionLogSchema>;
