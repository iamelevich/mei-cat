import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.anl.html
 */
export const AttrRehAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRehAnlData = v.InferOutput<typeof AttrRehAnlSchema>;
