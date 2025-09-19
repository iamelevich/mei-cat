import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mdiv.anl.html
 */
export const AttrMdivAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMdivAnlData = v.InferOutput<typeof AttrMdivAnlSchema>;
