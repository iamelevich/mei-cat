import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.ges.html
 */
export const AttrClefGrpGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrClefGrpGesData = v.InferOutput<typeof AttrClefGrpGesSchema>;
