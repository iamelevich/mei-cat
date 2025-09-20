import * as v from "valibot";

/**
 * Gestural domain attributes that describe the properties of a plica in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.ges.html
 */
export const AttrPlicaGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPlicaGesData = v.InferOutput<typeof AttrPlicaGesSchema>;
