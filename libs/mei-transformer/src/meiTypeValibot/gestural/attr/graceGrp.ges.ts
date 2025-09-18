import * as v from "valibot";

/**
 * Attributes for graceGrp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.ges.html
 */
export const AttrGraceGrpGesSchema = v.object({
  // TODO: Add graceGrp.ges attributes
});

export type AttrGraceGrpGesData = v.InferOutput<typeof AttrGraceGrpGesSchema>;
