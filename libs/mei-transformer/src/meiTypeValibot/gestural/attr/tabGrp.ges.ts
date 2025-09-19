import * as v from "valibot";
import { AttrDurationGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.ges.html
 */
export const AttrTabGrpGesSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationGesturalSchema.entries,
	...AttrDurationGesSchema.entries,
});

export type AttrTabGrpGesData = v.InferOutput<typeof AttrTabGrpGesSchema>;
