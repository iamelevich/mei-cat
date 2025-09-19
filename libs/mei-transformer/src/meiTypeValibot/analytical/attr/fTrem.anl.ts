import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.anl.html
 */
export const AttrFTremAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrFTremAnlData = v.InferOutput<typeof AttrFTremAnlSchema>;
