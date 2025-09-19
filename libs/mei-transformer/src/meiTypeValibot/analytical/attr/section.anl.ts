import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.anl.html
 */
export const AttrSectionAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSectionAnlData = v.InferOutput<typeof AttrSectionAnlSchema>;
