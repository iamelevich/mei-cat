import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verse.anl.html
 */
export const AttrVerseAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrVerseAnlData = v.InferOutput<typeof AttrVerseAnlSchema>;
