import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.ges.html
 */
export const AttrKeySigGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrKeySigGesData = v.InferOutput<typeof AttrKeySigGesSchema>;
