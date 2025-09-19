import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.anl.html
 */
export const AttrSymbolAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSymbolAnlData = v.InferOutput<typeof AttrSymbolAnlSchema>;
