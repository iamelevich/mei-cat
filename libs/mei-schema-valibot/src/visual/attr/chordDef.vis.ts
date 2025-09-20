import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.vis.html
 */
export const AttrChordDefVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrChordDefVisData = v.InferOutput<typeof AttrChordDefVisSchema>;
