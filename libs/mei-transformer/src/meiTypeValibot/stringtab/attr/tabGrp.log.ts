import * as v from "valibot";
import { AttrArticulationSchema } from "../../shared/attr/articulation";
import { AttrAugmentDotsSchema } from "../../shared/attr/augmentDots";
import { AttrDurationLogSchema } from "../../shared/attr/duration.log";
import { AttrEventSchema } from "../../shared/attr/event";

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
