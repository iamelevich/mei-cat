import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.anl.html
 */
export const AttrAccidAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrAccidAnlData = v.InferOutput<typeof AttrAccidAnlSchema>;
