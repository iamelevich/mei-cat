import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mordent.ges.html
 */
export const AttrMordentGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMordentGesData = v.InferOutput<typeof AttrMordentGesSchema>;
