import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.ges.html
 */
export const AttrSymbolGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSymbolGesData = v.InferOutput<typeof AttrSymbolGesSchema>;
