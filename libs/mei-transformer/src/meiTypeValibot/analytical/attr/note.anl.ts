import * as v from "valibot";
import {
	AttrAccidentalSchema,
	AttrArticulationSchema,
	AttrFermataPresentSchema,
} from "../../shared";
import {
	AttrHarmonicFunctionSchema,
	AttrIntervalMelodicSchema,
	AttrMelodicFunctionSchema,
	AttrPitchClassSchema,
	AttrSolfaSchema,
} from "..";
import { AttrNoteAnlCmnSchema } from "../../cmn";
import { AttrNoteAnlMensuralSchema } from "../../mensural";

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
