import * as v from "valibot";
import {
	AttrArticulationSchema,
	AttrAugmentDotsSchema,
	AttrDurationLogSchema,
	AttrEventSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.log.html
 */
export const AttrTabGrpLogSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationSchema.entries,
	...AttrAugmentDotsSchema.entries,
	...AttrDurationLogSchema.entries,
	...AttrEventSchema.entries,
});

export type AttrTabGrpLogData = v.InferOutput<typeof AttrTabGrpLogSchema>;
