import * as v from "valibot";
import { AttrArticulationGesSchema } from "../attr/articulation.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.artic.ges.html
 */
export const AttrArticGesSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationGesSchema.entries,
});

export type AttrArticGesData = v.InferOutput<typeof AttrArticGesSchema>;
