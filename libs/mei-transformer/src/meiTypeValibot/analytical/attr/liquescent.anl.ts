import * as v from "valibot";

/**
 * Attributes for liquescent.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.anl.html
 */
export const AttrLiquescentAnlSchema = v.object({
  // TODO: Add liquescent.anl attributes
});

export type AttrLiquescentAnlData = v.InferOutput<typeof AttrLiquescentAnlSchema>;
