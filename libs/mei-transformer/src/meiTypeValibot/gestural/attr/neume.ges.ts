import * as v from "valibot";
import { AttrTimestampGesSchema } from "../attr/timestamp.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neume.ges.html
 */
export const AttrNeumeGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestampGesSchema.entries,
});

export type AttrNeumeGesData = v.InferOutput<typeof AttrNeumeGesSchema>;
