import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.vis.html
 */
export const AttrClefGrpVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrClefGrpVisData = v.InferOutput<typeof AttrClefGrpVisSchema>;
