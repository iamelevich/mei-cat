import * as v from "valibot";

/**
 * Attributes for ncGrp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.ges.html
 */
export const AttrNcGrpGesSchema = v.object({
  // TODO: Add ncGrp.ges attributes
});

export type AttrNcGrpGesData = v.InferOutput<typeof AttrNcGrpGesSchema>;
