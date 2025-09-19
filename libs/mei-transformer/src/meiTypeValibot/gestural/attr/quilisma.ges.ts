import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.ges.html
 */
export const AttrQuilismaGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrQuilismaGesData = v.InferOutput<typeof AttrQuilismaGesSchema>;
