import * as v from "valibot";
import { AttrCourseAnlSchema } from "../../analytical/attr/course.anl";
import { StandardTagSchema } from "../../common";
import { AttrCourseGesSchema } from "../../gestural/attr/course.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrCourseVisSchema } from "../../visual/attr/course.vis";
import { AttrCourseLogSchema } from "../attr/course.log";
import { StringSchema } from "../element/string";

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
export const CourseSchema = v.lazy(() =>
	v.intersect([
		CourseBaseSchema,
		v.object({
			/**
			 * Reference to element string
			 * @see https://music-encoding.org/guidelines/v5/elements/string.html
			 */
			string: v.optional(v.union([StringSchema, v.array(StringSchema)])),
		}),
	]),
);

export type CourseData = v.InferOutput<typeof CourseSchema>;
