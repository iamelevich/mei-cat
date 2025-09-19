import * as v from "valibot";
import { AttrIntervalHarmonicSchema } from "../attr/intervalHarmonic";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harm.anl.html
 */
export const AttrHarmAnlSchema = v.object({
	// Inherited attribute classes
	...AttrIntervalHarmonicSchema.entries,

	// Direct attributes
	/**
	 * Indicates to what degree the harmonic label is supported by the notation.
	 */
	"@form": v.optional(v.string()),
});

export type AttrHarmAnlData = v.InferOutput<typeof AttrHarmAnlSchema>;
