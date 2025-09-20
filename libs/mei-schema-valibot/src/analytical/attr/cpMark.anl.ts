import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.anl.html
 */
export const AttrCpMarkAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCpMarkAnlData = v.InferOutput<typeof AttrCpMarkAnlSchema>;
