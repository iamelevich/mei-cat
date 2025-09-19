import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.anl.html
 */
export const AttrFermataAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrFermataAnlData = v.InferOutput<typeof AttrFermataAnlSchema>;
