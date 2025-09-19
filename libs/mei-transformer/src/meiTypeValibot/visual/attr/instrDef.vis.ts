import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.vis.html
 */
export const AttrInstrDefVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrInstrDefVisData = v.InferOutput<typeof AttrInstrDefVisSchema>;
