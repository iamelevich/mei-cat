import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tempo.anl.html
 */
export const AttrTempoAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTempoAnlData = v.InferOutput<typeof AttrTempoAnlSchema>;
