import * as v from "valibot";
import { AttrDurationGesSchema } from "../attr/duration.ges";
import { AttrArticulationGesSchema } from "./articulation.ges";

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
