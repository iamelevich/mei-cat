import * as v from "valibot";

/**
 * Attributes for ligature.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.log.html
 */
export const AttrLigatureLogSchema = v.object({
  // TODO: Add ligature.log attributes
});

export type AttrLigatureLogData = v.InferOutput<typeof AttrLigatureLogSchema>;
