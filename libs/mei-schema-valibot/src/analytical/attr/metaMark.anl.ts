import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.anl.html
 */
export const AttrMetaMarkAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMetaMarkAnlData = v.InferOutput<typeof AttrMetaMarkAnlSchema>;
