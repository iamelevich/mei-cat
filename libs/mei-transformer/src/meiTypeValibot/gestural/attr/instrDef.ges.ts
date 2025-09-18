import * as v from "valibot";

/**
 * Attributes for instrDef.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.ges.html
 */
export const AttrInstrDefGesSchema = v.object({
  // TODO: Add instrDef.ges attributes
});

export type AttrInstrDefGesData = v.InferOutput<typeof AttrInstrDefGesSchema>;
