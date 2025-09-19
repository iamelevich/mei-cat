import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.vis.html
 */
export const AttrPadVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPadVisData = v.InferOutput<typeof AttrPadVisSchema>;
