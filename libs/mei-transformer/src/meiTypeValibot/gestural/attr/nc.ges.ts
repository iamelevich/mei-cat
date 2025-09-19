import * as v from "valibot";
import { AttrInstrumentIdentSchema } from "../../midi/attr/instrumentIdent";
import { AttrMidiVelocitySchema } from "../../midi/attr/midiVelocity";
import { AttrAccidentalGesSchema } from "../attr/accidental.ges";
import { AttrArticulationGesSchema } from "../attr/articulation.ges";
import { AttrDurationGesSchema } from "../attr/duration.ges";
import { AttrPitchGesSchema } from "../attr/pitch.ges";

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
