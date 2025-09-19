import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.ges.html
 */
export const AttrEndingGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrEndingGesData = v.InferOutput<typeof AttrEndingGesSchema>;
