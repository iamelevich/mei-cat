import * as v from "valibot";
import { type StaffDefData, StaffDefSchema } from "..";

/**
 * Groups elements that permit declaration of staff properties.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffDefLike.html
 */
export const ModelStaffDefLikeSchema: v.GenericSchema<ModelStaffDefLikeData> =
	v.object({
		/**
		 * Container for staff meta-information.
		 * @see https://music-encoding.org/guidelines/v5/elements/staffDef.html
		 */
		staffDef: v.optional(
			v.union([
				v.lazy(() => StaffDefSchema),
				v.array(v.lazy(() => StaffDefSchema)),
			]),
		),
	});

export type ModelStaffDefLikeData = {
	staffDef?: StaffDefData | StaffDefData[];
};
