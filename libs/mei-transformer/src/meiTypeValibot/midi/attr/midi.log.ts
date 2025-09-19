import * as v from "valibot";
import {
	AttrLayerIdentSchema,
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.log.html
 */
export const AttrMidiLogSchema = v.object({
	// Inherited attribute classes
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
});

export type AttrMidiLogData = v.InferOutput<typeof AttrMidiLogSchema>;
