import * as v from "valibot";
import { type CourseData, CourseSchema } from "../../stringtab";

/**
 * Groups elements that may appear inside the <gi scheme="MEI">tuning</gi> element.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.tuningPart.html
 */
export const ModelTuningPartSchema: v.GenericSchema<ModelTuningPartData> =
	v.object({
		/**
		 * Describes the tuning of a course on a stringed instrument ( e.g. , guitar, lute).
		 * @see https://music-encoding.org/guidelines/v5/elements/course.html
		 */
		course: v.optional(
			v.union([
				v.lazy(() => CourseSchema),
				v.array(v.lazy(() => CourseSchema)),
			]),
		),
	});

export type ModelTuningPartData = {
	course?: CourseData | CourseData[];
};
