import * as v from "valibot";

/**
 * Attributes for liquescent.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.log.html
 */
export const AttrLiquescentLogSchema = v.object({
  // TODO: Add liquescent.log attributes
});

export type AttrLiquescentLogData = v.InferOutput<typeof AttrLiquescentLogSchema>;
