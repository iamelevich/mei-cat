import * as v from "valibot";
import { AttrArticulationGesSchema } from "../attr/articulation.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.episema.ges.html
 */
export const AttrEpisemaGesSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationGesSchema.entries,
});

export type AttrEpisemaGesData = v.InferOutput<typeof AttrEpisemaGesSchema>;
