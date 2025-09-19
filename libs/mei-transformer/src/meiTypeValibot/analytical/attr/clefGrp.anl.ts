import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.anl.html
 */
export const AttrClefGrpAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrClefGrpAnlData = v.InferOutput<typeof AttrClefGrpAnlSchema>;
