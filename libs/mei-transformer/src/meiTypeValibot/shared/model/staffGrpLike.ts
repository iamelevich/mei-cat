import * as v from "valibot";
import { type StaffGrpData, StaffGrpSchema } from "../element/staffGrp";

/**
 * Groups elements that permit declaration of staff group properties.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffGrpLike.html
 */
export const ModelStaffGrpLikeSchema: v.GenericSchema<ModelStaffGrpLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * A group of bracketed or braced staves.
			 * @see https://music-encoding.org/guidelines/v5/elements/staffGrp.html
			 */
			staffGrp: v.optional(v.union([StaffGrpSchema, v.array(StaffGrpSchema)])),
		}),
	);

export type ModelStaffGrpLikeData = {
	staffGrp?: StaffGrpData | StaffGrpData[];
};
