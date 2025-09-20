import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.vis.html
 */
export const AttrCourseVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCourseVisData = v.InferOutput<typeof AttrCourseVisSchema>;
