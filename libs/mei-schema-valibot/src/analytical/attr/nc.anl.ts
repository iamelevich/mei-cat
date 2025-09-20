import * as v from "valibot";
import { AttrNeumeTypeSchema } from "../../neumes/attr/neumeType";
import { AttrHarmonicFunctionSchema } from "./harmonicFunction";
import { AttrIntervalMelodicSchema } from "./intervalMelodic";
import { AttrMelodicFunctionSchema } from "./melodicFunction";
import { AttrPitchClassSchema } from "./pitchClass";
import { AttrSolfaSchema } from "./solfa";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nc.anl.html
 */
export const AttrNcAnlSchema = v.object({
	// Inherited attribute classes
	...AttrHarmonicFunctionSchema.entries,
	...AttrIntervalMelodicSchema.entries,
	...AttrMelodicFunctionSchema.entries,
	...AttrNeumeTypeSchema.entries,
	...AttrPitchClassSchema.entries,
	...AttrSolfaSchema.entries,
});

export type AttrNcAnlData = v.InferOutput<typeof AttrNcAnlSchema>;
