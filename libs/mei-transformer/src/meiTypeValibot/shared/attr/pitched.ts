import * as v from "valibot";
import { AttrOctaveSchema, AttrPitchSchema } from "..";

/**
 * Attributes that record written pitch name and octave number..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitched.html
 */
export const AttrPitchedSchema = v.object({
	// Inherited attribute classes
	...AttrOctaveSchema.entries,
	...AttrPitchSchema.entries,
});

export type AttrPitchedData = v.InferOutput<typeof AttrPitchedSchema>;
