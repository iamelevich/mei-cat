import * as v from "valibot";
import { AttrTimestamp2GesSchema } from "../attr/timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.ges.html
 */
export const AttrPedalGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,
});

export type AttrPedalGesData = v.InferOutput<typeof AttrPedalGesSchema>;
