import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.anl.html
 */
export const AttrNcGrpAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrNcGrpAnlData = v.InferOutput<typeof AttrNcGrpAnlSchema>;
