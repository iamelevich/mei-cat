import * as v from "valibot";
import { AttrArticulationSchema } from "./articulation";
import { AttrControlEventSchema } from "./controlEvent";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.artic.log.html
 */
export const AttrArticLogSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationSchema.entries,
	...AttrControlEventSchema.entries,
});

export type AttrArticLogData = v.InferOutput<typeof AttrArticLogSchema>;
