import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.anl.html
 */
export const AttrChordDefAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrChordDefAnlData = v.InferOutput<typeof AttrChordDefAnlSchema>;
