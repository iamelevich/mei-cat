import * as v from "valibot";

/**
 * Attributes for instrDef.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.log.html
 */
export const AttrInstrDefLogSchema = v.object({
  // TODO: Add instrDef.log attributes
});

export type AttrInstrDefLogData = v.InferOutput<typeof AttrInstrDefLogSchema>;
