import * as v from "valibot";

/**
 * Attributes for instrumentIdent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrumentIdent.html
 */
export const AttrInstrumentIdentSchema = v.object({
  // TODO: Add instrumentIdent attributes
});

export type AttrInstrumentIdentData = v.InferOutput<typeof AttrInstrumentIdentSchema>;
