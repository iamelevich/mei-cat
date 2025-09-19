import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.anl.html
 */
export const AttrQuilismaAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrQuilismaAnlData = v.InferOutput<typeof AttrQuilismaAnlSchema>;
