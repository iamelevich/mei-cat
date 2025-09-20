import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.ges.html
 */
export const AttrMensurGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMensurGesData = v.InferOutput<typeof AttrMensurGesSchema>;
