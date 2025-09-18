import * as v from "valibot";

/**
 * Attributes for ligature.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.ges.html
 */
export const AttrLigatureGesSchema = v.object({
  // TODO: Add ligature.ges attributes
});

export type AttrLigatureGesData = v.InferOutput<typeof AttrLigatureGesSchema>;
