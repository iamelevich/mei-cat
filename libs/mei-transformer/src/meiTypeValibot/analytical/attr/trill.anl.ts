import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trill.anl.html
 */
export const AttrTrillAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTrillAnlData = v.InferOutput<typeof AttrTrillAnlSchema>;
