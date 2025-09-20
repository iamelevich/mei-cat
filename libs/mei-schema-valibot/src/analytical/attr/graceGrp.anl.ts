import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.anl.html
 */
export const AttrGraceGrpAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrGraceGrpAnlData = v.InferOutput<typeof AttrGraceGrpAnlSchema>;
