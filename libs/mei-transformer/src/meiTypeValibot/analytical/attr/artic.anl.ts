import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.artic.anl.html
 */
export const AttrArticAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrArticAnlData = v.InferOutput<typeof AttrArticAnlSchema>;
