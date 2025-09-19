import * as v from "valibot";
import { type StaffData, StaffSchema } from "../element/staff";

/**
 * Groups elements that function like staves.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffLike.html
 */
export const ModelStaffLikeSchema: v.GenericSchema<ModelStaffLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * A group of equidistant horizontal lines on which notes are placed in order to represent pitch or a grouping element for individual 'strands' of notes, rests, etc. that may or may not actually be rendered on staff lines; that is, both diastematic and non-diastematic signs.
			 * @see https://music-encoding.org/guidelines/v5/elements/staff.html
			 */
			staff: v.optional(v.union([v.array(StaffSchema), StaffSchema])),
		}),
);

export type ModelStaffLikeData = {
	staff?: StaffData | StaffData[];
};
