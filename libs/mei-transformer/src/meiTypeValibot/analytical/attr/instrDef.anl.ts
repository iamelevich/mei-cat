import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.anl.html
 */
export const AttrInstrDefAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrInstrDefAnlData = v.InferOutput<typeof AttrInstrDefAnlSchema>;
