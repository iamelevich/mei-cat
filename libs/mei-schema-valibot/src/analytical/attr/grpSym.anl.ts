import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.grpSym.anl.html
 */
export const AttrGrpSymAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrGrpSymAnlData = v.InferOutput<typeof AttrGrpSymAnlSchema>;
