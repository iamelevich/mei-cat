import * as v from "valibot";
import { AttrDurationGesSchema } from "./duration.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.ges.html
 */
export const AttrHarpPedalGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
});

export type AttrHarpPedalGesData = v.InferOutput<typeof AttrHarpPedalGesSchema>;
