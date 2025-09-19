import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.anl.html
 */
export const AttrOriscusAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOriscusAnlData = v.InferOutput<typeof AttrOriscusAnlSchema>;
