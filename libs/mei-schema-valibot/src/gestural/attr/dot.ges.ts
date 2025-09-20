import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.ges.html
 */
export const AttrDotGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrDotGesData = v.InferOutput<typeof AttrDotGesSchema>;
