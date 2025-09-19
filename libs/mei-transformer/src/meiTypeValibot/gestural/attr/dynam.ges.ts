import * as v from "valibot";
import { AttrDurationGesSchema, AttrTimestamp2GesSchema } from "..";
import { AttrMidiValueSchema, AttrMidiValue2Schema } from "../../midi";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dynam.ges.html
 */
export const AttrDynamGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrMidiValueSchema.entries,
	...AttrMidiValue2Schema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrDynamGesData = v.InferOutput<typeof AttrDynamGesSchema>;
