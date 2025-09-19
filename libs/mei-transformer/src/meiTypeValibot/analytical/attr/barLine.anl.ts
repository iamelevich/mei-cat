import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.anl.html
 */
export const AttrBarLineAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBarLineAnlData = v.InferOutput<typeof AttrBarLineAnlSchema>;
