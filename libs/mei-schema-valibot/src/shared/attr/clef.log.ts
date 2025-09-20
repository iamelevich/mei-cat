import * as v from "valibot";
import { AttrClefShapeSchema } from "./clefShape";
import { AttrLineLocSchema } from "./lineLoc";
import { AttrOctaveSchema } from "./octave";
import { AttrOctaveDisplacementSchema } from "./octaveDisplacement";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.log.html
 */
export const AttrClefLogSchema = v.object({
	// Inherited attribute classes
	...AttrClefShapeSchema.entries,
	...AttrLineLocSchema.entries,
	...AttrOctaveSchema.entries,
	...AttrOctaveDisplacementSchema.entries,

	// Direct attributes
	/**
	 * Records the function of the clef. A "cautionary" clef does not change the following pitches.
	 */
	"@cautionary": v.optional(v.string()),
});

export type AttrClefLogData = v.InferOutput<typeof AttrClefLogSchema>;
