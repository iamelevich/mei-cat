import * as v from "valibot";
import { AttrDurationGesSchema, AttrTimestamp2GesSchema } from "..";

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
