import * as v from "valibot";

/**
 * Attributes for grpSym.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.grpSym.ges.html
 */
export const AttrGrpSymGesSchema = v.object({
  // TODO: Add grpSym.ges attributes
});

export type AttrGrpSymGesData = v.InferOutput<typeof AttrGrpSymGesSchema>;
