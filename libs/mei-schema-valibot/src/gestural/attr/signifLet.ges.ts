import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.ges.html
 */
export const AttrSignifLetGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSignifLetGesData = v.InferOutput<typeof AttrSignifLetGesSchema>;
