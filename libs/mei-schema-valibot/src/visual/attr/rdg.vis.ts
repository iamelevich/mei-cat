import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rdg.vis.html
 */
export const AttrRdgVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRdgVisData = v.InferOutput<typeof AttrRdgVisSchema>;
