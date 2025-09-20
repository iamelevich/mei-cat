import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.anl.html
 */
export const AttrPadAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPadAnlData = v.InferOutput<typeof AttrPadAnlSchema>;
