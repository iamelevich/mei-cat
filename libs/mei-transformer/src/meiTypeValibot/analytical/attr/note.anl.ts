import * as v from "valibot";
import { AttrNoteAnlCmnSchema } from "../../cmn/attr/note.anl.cmn";
import { AttrNoteAnlMensuralSchema } from "../../mensural/attr/note.anl.mensural";
import { AttrAccidentalSchema } from "../../shared/attr/accidental";
import { AttrArticulationSchema } from "../../shared/attr/articulation";
import { AttrFermataPresentSchema } from "../../shared/attr/fermataPresent";
import { AttrHarmonicFunctionSchema } from "../attr/harmonicFunction";
import { AttrIntervalMelodicSchema } from "../attr/intervalMelodic";
import { AttrMelodicFunctionSchema } from "../attr/melodicFunction";
import { AttrPitchClassSchema } from "../attr/pitchClass";
import { AttrSolfaSchema } from "../attr/solfa";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.anl.html
 */
export const AttrNoteAnlSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalSchema.entries,
	...AttrArticulationSchema.entries,
	...AttrFermataPresentSchema.entries,
	...AttrHarmonicFunctionSchema.entries,
	...AttrIntervalMelodicSchema.entries,
	...AttrMelodicFunctionSchema.entries,
	...AttrNoteAnlCmnSchema.entries,
	...AttrNoteAnlMensuralSchema.entries,
	...AttrPitchClassSchema.entries,
	...AttrSolfaSchema.entries,
});

export type AttrNoteAnlData = v.InferOutput<typeof AttrNoteAnlSchema>;
