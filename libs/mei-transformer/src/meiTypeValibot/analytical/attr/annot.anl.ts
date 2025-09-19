import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.anl.html
 */
export const AttrAnnotAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAnnotAnlData = v.InferOutput<typeof AttrAnnotAnlSchema>;
