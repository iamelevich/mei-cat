import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rdg.anl.html
 */
export const AttrRdgAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRdgAnlData = v.InferOutput<typeof AttrRdgAnlSchema>;
