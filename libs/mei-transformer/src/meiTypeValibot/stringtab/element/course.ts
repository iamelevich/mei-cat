import * as v from "valibot";
import { AttrCourseAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrCourseGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrCourseVisSchema } from "../../visual";
import { AttrCourseLogSchema } from "..";
import { StringSchema } from ".";

/**
 * Base schema with attribute, to simplify types for CourseSchema
 */
const CourseBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCourseAnlSchema.entries,
	...AttrCourseGesSchema.entries,
	...AttrCourseLogSchema.entries,
	...AttrCourseVisSchema.entries,
});

/**
 * Describes the tuning of a course on a stringed instrument (<abbr>e.g.</abbr>, guitar, lute).
 * @see https://music-encoding.org/guidelines/v5/elements/course.html
 */
export const CourseSchema = v.intersect([
	CourseBaseSchema,
	v.object({
		/**
		 * Reference to element string
		 * @see https://music-encoding.org/guidelines/v5/elements/string.html
		 */
		string: v.optional(
			v.union([
				v.lazy(() => StringSchema),
				v.array(v.lazy(() => StringSchema)),
			]),
		),
	}),
]);

export type CourseData = v.InferOutput<typeof CourseSchema>;
