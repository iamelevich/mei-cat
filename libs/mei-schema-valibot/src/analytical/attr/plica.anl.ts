import * as v from "valibot";

/**
 * Analytical domain attributes that describe the properties of a plica in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.anl.html
 */
export const AttrPlicaAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPlicaAnlData = v.InferOutput<typeof AttrPlicaAnlSchema>;
