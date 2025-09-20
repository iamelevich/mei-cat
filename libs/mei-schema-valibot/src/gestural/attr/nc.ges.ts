import * as v from "valibot";
import { AttrInstrumentIdentSchema } from "../../midi/attr/instrumentIdent";
import { AttrMidiVelocitySchema } from "../../midi/attr/midiVelocity";
import { AttrAccidentalGesSchema } from "./accidental.ges";
import { AttrArticulationGesSchema } from "./articulation.ges";
import { AttrDurationGesSchema } from "./duration.ges";
import { AttrPitchGesSchema } from "./pitch.ges";

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
