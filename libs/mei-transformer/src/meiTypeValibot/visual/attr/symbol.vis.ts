import * as v from "valibot";

/**
 * Attributes for symbol.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.vis.html
 */
export const AttrSymbolVisSchema = v.object({
  // TODO: Add symbol.vis attributes
});

export type AttrSymbolVisData = v.InferOutput<typeof AttrSymbolVisSchema>;
