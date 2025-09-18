import * as v from "valibot";

/**
 * Attributes for symbol.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.anl.html
 */
export const AttrSymbolAnlSchema = v.object({
  // TODO: Add symbol.anl attributes
});

export type AttrSymbolAnlData = v.InferOutput<typeof AttrSymbolAnlSchema>;
