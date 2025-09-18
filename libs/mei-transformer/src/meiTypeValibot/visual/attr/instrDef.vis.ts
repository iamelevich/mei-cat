import * as v from "valibot";

/**
 * Attributes for instrDef.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.vis.html
 */
export const AttrInstrDefVisSchema = v.object({
  // TODO: Add instrDef.vis attributes
});

export type AttrInstrDefVisData = v.InferOutput<typeof AttrInstrDefVisSchema>;
