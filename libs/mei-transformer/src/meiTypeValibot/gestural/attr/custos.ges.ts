import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.ges.html
 */
export const AttrCustosGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrCustosGesData = v.InferOutput<typeof AttrCustosGesSchema>;
