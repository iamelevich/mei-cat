import * as v from "valibot";
import { AttrMidiValueSchema } from "../../midi/attr/midiValue";
import { AttrMidiValue2Schema } from "../../midi/attr/midiValue2";
import { AttrDurationGesSchema } from "./duration.ges";
import { AttrTimestamp2GesSchema } from "./timestamp2.ges";

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
