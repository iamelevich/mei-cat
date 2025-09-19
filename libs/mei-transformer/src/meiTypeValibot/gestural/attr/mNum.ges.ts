import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.ges.html
 */
export const AttrMNumGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMNumGesData = v.InferOutput<typeof AttrMNumGesSchema>;
