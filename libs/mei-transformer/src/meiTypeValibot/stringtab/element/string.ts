import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrCourseAnlSchema } from "../../analytical";
import { AttrCourseGesSchema } from "../../gestural";
import { AttrCourseLogSchema } from "..";
import { AttrCourseVisSchema } from "../../visual";

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
export const StringSchema: v.GenericSchema<StringData> = v.intersect([
	StringBaseSchema,
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

export type StringData = StringBaseData & {
	string?: StringData | StringData[];
};
