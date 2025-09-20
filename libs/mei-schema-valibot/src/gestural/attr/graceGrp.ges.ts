import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.ges.html
 */
export const AttrGraceGrpGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrGraceGrpGesData = v.InferOutput<typeof AttrGraceGrpGesSchema>;
