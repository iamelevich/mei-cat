import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.strophicus.anl.html
 */
export const AttrStrophicusAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStrophicusAnlData = v.InferOutput<
	typeof AttrStrophicusAnlSchema
>;
