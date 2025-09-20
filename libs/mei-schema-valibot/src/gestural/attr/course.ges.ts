import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.ges.html
 */
export const AttrCourseGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCourseGesData = v.InferOutput<typeof AttrCourseGesSchema>;
