import * as v from "valibot";
import { type CourseData, CourseSchema } from "../../stringtab/element/course";

/**
 * Groups elements that may appear inside the <gi scheme="MEI">tuning</gi> element.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.tuningPart.html
 */
export const ModelTuningPartSchema: v.GenericSchema<ModelTuningPartData> =
	v.lazy(() =>
		v.object({
			/**
			 * Describes the tuning of a course on a stringed instrument ( e.g. , guitar, lute).
			 * @see https://music-encoding.org/guidelines/v5/elements/course.html
			 */
			course: v.optional(v.union([v.array(CourseSchema), CourseSchema])),
		}),
	);

export type ModelTuningPartData = {
	course?: CourseData | CourseData[];
};
