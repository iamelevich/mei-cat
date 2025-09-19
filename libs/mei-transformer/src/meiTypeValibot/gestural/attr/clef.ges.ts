import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.ges.html
 */
export const AttrClefGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrClefGesData = v.InferOutput<typeof AttrClefGesSchema>;
