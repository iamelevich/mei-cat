import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabDurSym.ges.html
 */
export const AttrTabDurSymGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTabDurSymGesData = v.InferOutput<typeof AttrTabDurSymGesSchema>;
