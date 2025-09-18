import * as v from "valibot";

/**
 * Attributes for ligature.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.anl.html
 */
export const AttrLigatureAnlSchema = v.object({
  // TODO: Add ligature.anl attributes
});

export type AttrLigatureAnlData = v.InferOutput<typeof AttrLigatureAnlSchema>;
