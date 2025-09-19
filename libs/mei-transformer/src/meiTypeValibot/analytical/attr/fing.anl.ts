import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fing.anl.html
 */
export const AttrFingAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrFingAnlData = v.InferOutput<typeof AttrFingAnlSchema>;
