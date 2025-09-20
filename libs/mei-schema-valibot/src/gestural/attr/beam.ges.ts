import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.ges.html
 */
export const AttrBeamGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBeamGesData = v.InferOutput<typeof AttrBeamGesSchema>;
