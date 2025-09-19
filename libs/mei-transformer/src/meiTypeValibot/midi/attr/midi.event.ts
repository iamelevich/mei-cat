import * as v from "valibot";
import {
	AttrLayerIdentSchema,
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
	AttrTimestampLogSchema,
} from "../../shared";
import { AttrTimestampGesSchema } from "../../gestural";

/**
 * Attributes common to MIDI events..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.event.html
 */
export const AttrMidiEventSchema = v.object({
	// Inherited attribute classes
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrTimestampGesSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrMidiEventData = v.InferOutput<typeof AttrMidiEventSchema>;
