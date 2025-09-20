import * as v from "valibot";
import { AttrArticulationGesSchema } from "./articulation.ges";
import { AttrDurationGesSchema } from "./duration.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.ges.html
 */
export const AttrTabGrpGesSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationGesSchema.entries,
	...AttrDurationGesSchema.entries,
});

export type AttrTabGrpGesData = v.InferOutput<typeof AttrTabGrpGesSchema>;
