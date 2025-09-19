import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.anl.html
 */
export const AttrBeamSpanAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBeamSpanAnlData = v.InferOutput<typeof AttrBeamSpanAnlSchema>;
