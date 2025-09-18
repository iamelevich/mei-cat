import * as v from "valibot";

/**
 * Attributes for symbol.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.ges.html
 */
export const AttrSymbolGesSchema = v.object({
  // TODO: Add symbol.ges attributes
});

export type AttrSymbolGesData = v.InferOutput<typeof AttrSymbolGesSchema>;
