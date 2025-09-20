import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.part.ges.html
 */
export const AttrPartGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPartGesData = v.InferOutput<typeof AttrPartGesSchema>;
