import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.anl.html
 */
export const AttrPbAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPbAnlData = v.InferOutput<typeof AttrPbAnlSchema>;
