import * as v from "valibot";

/**
 * Attributes for octave.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.log.html
 */
export const AttrOctaveLogSchema = v.object({
	// TODO: Add octave.log attributes
});

export type AttrOctaveLogData = v.InferOutput<typeof AttrOctaveLogSchema>;
