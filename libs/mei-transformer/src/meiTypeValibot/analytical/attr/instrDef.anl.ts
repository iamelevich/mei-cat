import * as v from "valibot";

/**
 * Attributes for instrDef.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.anl.html
 */
export const AttrInstrDefAnlSchema = v.object({
  // TODO: Add instrDef.anl attributes
});

export type AttrInstrDefAnlData = v.InferOutput<typeof AttrInstrDefAnlSchema>;
