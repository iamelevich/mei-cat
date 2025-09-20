import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.octave.anl.html
 */
export const AttrOctaveAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOctaveAnlData = v.InferOutput<typeof AttrOctaveAnlSchema>;
