import * as v from "valibot";

/**
 * Attributes for syl.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syl.ges.html
 */
export const AttrSylGesSchema = v.object({
  // TODO: Add syl.ges attributes
});

export type AttrSylGesData = v.InferOutput<typeof AttrSylGesSchema>;
