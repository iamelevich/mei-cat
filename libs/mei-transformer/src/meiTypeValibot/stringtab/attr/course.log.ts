import * as v from "valibot";
import { AttrAccidentalSchema } from "../../shared/attr/accidental";
import { AttrPitchedSchema } from "../../shared/attr/pitched";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.log.html
 */
export const AttrCourseLogSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalSchema.entries,
	...AttrPitchedSchema.entries,
});

export type AttrCourseLogData = v.InferOutput<typeof AttrCourseLogSchema>;
