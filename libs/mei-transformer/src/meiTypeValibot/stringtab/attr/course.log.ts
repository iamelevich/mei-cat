import * as v from "valibot";

/**
 * Attributes for course.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.course.log.html
 */
export const AttrCourseLogSchema = v.object({
  // TODO: Add course.log attributes
});

export type AttrCourseLogData = v.InferOutput<typeof AttrCourseLogSchema>;
