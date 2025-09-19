import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.anl.html
 */
export const AttrClefAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrClefAnlData = v.InferOutput<typeof AttrClefAnlSchema>;
