import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.anl.html
 */
export const AttrHarpPedalAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrHarpPedalAnlData = v.InferOutput<typeof AttrHarpPedalAnlSchema>;
