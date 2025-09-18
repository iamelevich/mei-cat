import * as v from "valibot";

/**
 * Attributes for fingGrp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fingGrp.ges.html
 */
export const AttrFingGrpGesSchema = v.object({
  // TODO: Add fingGrp.ges attributes
});

export type AttrFingGrpGesData = v.InferOutput<typeof AttrFingGrpGesSchema>;
