import * as v from "valibot";
import { AttrCourseAnlSchema } from "../../analytical/attr/course.anl";
import { StandardTagSchema } from "../../common";
import { AttrCourseGesSchema } from "../../gestural/attr/course.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrCourseVisSchema } from "../../visual/attr/course.vis";
import { AttrCourseLogSchema } from "../attr/course.log";

/**
 * Base schema with attribute, to simplify types for StringSchema
 */
const StringBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCourseAnlSchema.entries,
	...AttrCourseGesSchema.entries,
	...AttrCourseLogSchema.entries,
	...AttrCourseVisSchema.entries,
});

type StringBaseData = v.InferOutput<typeof StringBaseSchema>;

/**
 * Used to modify tuning information given by the course element. Describes the tuning of an individual string within a course on a stringed instrument (<abbr>e.g.</abbr>, guitar, lute).
 * @see https://music-encoding.org/guidelines/v5/elements/string.html
 */
export const StringSchema: v.GenericSchema<StringData> = v.lazy(() =>
	v.intersect([
		StringBaseSchema,
		v.object({
			/**
			 * Reference to element string
			 * @see https://music-encoding.org/guidelines/v5/elements/string.html
			 */
			string: v.optional(v.union([v.array(StringSchema), StringSchema])),
		}),
	]),
);

export type StringData = StringBaseData & {
	string?: StringData | StringData[];
};
