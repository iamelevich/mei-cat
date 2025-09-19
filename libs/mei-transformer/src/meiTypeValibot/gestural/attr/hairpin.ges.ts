import * as v from "valibot";
import { AttrDurationGesSchema, AttrTimestamp2GesSchema } from "..";
import { AttrMidiValueSchema, AttrMidiValue2Schema } from "../../midi";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.ges.html
 */
export const AttrHairpinGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrMidiValueSchema.entries,
	...AttrMidiValue2Schema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrHairpinGesData = v.InferOutput<typeof AttrHairpinGesSchema>;
