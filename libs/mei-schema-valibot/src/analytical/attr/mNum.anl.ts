import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.anl.html
 */
export const AttrMNumAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMNumAnlData = v.InferOutput<typeof AttrMNumAnlSchema>;
