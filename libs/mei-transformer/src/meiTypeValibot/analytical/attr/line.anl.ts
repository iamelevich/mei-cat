import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.anl.html
 */
export const AttrLineAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLineAnlData = v.InferOutput<typeof AttrLineAnlSchema>;
