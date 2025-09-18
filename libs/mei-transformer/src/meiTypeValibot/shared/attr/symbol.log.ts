import * as v from "valibot";

/**
 * Attributes for symbol logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.log.html
 */
export const AttrSymbolLogSchema = v.object({
  // TODO: Add symbol logging attributes
});

export type AttrSymbolLogData = v.InferOutput<typeof AttrSymbolLogSchema>;
