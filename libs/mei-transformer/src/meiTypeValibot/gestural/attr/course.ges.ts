import * as v from "valibot";

/**
 * Attributes for course.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.ges.html
 */
export const AttrCourseGesSchema = v.object({
  // TODO: Add course.ges attributes
});

export type AttrCourseGesData = v.InferOutput<typeof AttrCourseGesSchema>;
