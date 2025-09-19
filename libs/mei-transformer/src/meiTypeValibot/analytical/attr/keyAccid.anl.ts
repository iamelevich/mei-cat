import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyAccid.anl.html
 */
export const AttrKeyAccidAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrKeyAccidAnlData = v.InferOutput<typeof AttrKeyAccidAnlSchema>;
