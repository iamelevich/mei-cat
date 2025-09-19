import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.anl.html
 */
export const AttrMensurAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMensurAnlData = v.InferOutput<typeof AttrMensurAnlSchema>;
