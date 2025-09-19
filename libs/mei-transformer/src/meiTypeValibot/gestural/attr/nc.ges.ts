import * as v from "valibot";
import {
	AttrAccidentalGesSchema,
	AttrArticulationGesSchema,
	AttrDurationGesSchema,
	AttrPitchGesSchema,
} from "..";
import { AttrInstrumentIdentSchema, AttrMidiVelocitySchema } from "../../midi";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nc.ges.html
 */
export const AttrNcGesSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalGesSchema.entries,
	...AttrArticulationGesSchema.entries,
	...AttrDurationGesSchema.entries,
	...AttrInstrumentIdentSchema.entries,
	...AttrMidiVelocitySchema.entries,
	...AttrPitchGesSchema.entries,
});

export type AttrNcGesData = v.InferOutput<typeof AttrNcGesSchema>;
