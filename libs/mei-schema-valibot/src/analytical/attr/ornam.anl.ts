import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornam.anl.html
 */
export const AttrOrnamAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOrnamAnlData = v.InferOutput<typeof AttrOrnamAnlSchema>;
