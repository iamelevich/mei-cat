import * as v from "valibot";

/**
 * Attributes for course.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.vis.html
 */
export const AttrCourseVisSchema = v.object({
  // TODO: Add course.vis attributes
});

export type AttrCourseVisData = v.InferOutput<typeof AttrCourseVisSchema>;
