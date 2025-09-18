import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * course element.
 * @see https://music-encoding.org/guidelines/v5/elements/course.html
 */
export const CourseSchema = AnythingObjectSchema; // TODO: implement element

export type CourseData = v.InferOutput<typeof CourseSchema>;
