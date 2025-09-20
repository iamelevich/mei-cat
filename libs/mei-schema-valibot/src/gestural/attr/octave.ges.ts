import * as v from "valibot";
import { AttrDurationGesSchema } from "./duration.ges";
import { AttrTimestamp2GesSchema } from "./timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.ges.html
 */
export const AttrOctaveGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrOctaveGesData = v.InferOutput<typeof AttrOctaveGesSchema>;
