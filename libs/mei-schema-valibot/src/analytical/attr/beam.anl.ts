import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.anl.html
 */
export const AttrBeamAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBeamAnlData = v.InferOutput<typeof AttrBeamAnlSchema>;
