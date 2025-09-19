import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lv.anl.html
 */
export const AttrLvAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLvAnlData = v.InferOutput<typeof AttrLvAnlSchema>;
