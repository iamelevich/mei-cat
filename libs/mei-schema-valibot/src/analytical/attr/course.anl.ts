import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.anl.html
 */
export const AttrCourseAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCourseAnlData = v.InferOutput<typeof AttrCourseAnlSchema>;
