import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.parts.anl.html
 */
export const AttrPartsAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPartsAnlData = v.InferOutput<typeof AttrPartsAnlSchema>;
