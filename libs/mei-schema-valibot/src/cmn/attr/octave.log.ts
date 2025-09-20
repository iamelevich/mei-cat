import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrDurationAdditiveSchema } from "../../shared/attr/duration.additive";
import { AttrOctaveDisplacementSchema } from "../../shared/attr/octaveDisplacement";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrTimestamp2LogSchema } from "../../shared/attr/timestamp2.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.log.html
 */
export const AttrOctaveLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrOctaveDisplacementSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Indicates whether the octave displacement should be performed simultaneously with the written notes, <abbr>i.e.</abbr>, "coll' ottava". Unlike other octave signs which are indicated by broken lines, coll' ottava typically uses an unbroken line or a series of longer broken lines, ending with a short vertical stroke. See Read, p. 47-48.
	 */
	"@coll": v.optional(v.string()),
});

export type AttrOctaveLogData = v.InferOutput<typeof AttrOctaveLogSchema>;
