import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fingGrp.anl.html
 */
export const AttrFingGrpAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrFingGrpAnlData = v.InferOutput<typeof AttrFingGrpAnlSchema>;
