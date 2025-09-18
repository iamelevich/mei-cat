import * as v from "valibot";

/**
 * Attributes for course.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.anl.html
 */
export const AttrCourseAnlSchema = v.object({
  // TODO: Add course.anl attributes
});

export type AttrCourseAnlData = v.InferOutput<typeof AttrCourseAnlSchema>;
