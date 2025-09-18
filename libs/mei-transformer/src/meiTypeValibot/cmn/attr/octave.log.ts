import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";
import { AttrOctaveDisplacementSchema } from "../../shared/attr/octaveDisplacement";

/**
 * Attributes for octave.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.log.html
 */
export const AttrOctaveLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrOctaveDisplacementSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrOctaveLogData = v.InferOutput<typeof AttrOctaveLogSchema>;
