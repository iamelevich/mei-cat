import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabDurSym.anl.html
 */
export const AttrTabDurSymAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTabDurSymAnlData = v.InferOutput<typeof AttrTabDurSymAnlSchema>;
