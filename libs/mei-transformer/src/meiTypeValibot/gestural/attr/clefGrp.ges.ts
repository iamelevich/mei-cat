import * as v from "valibot";

/**
 * Attributes for clefGrp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.ges.html
 */
export const AttrClefGrpGesSchema = v.object({
  // TODO: Add clefGrp.ges attributes
});

export type AttrClefGrpGesData = v.InferOutput<typeof AttrClefGrpGesSchema>;
