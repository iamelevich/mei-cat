import * as v from "valibot";

/**
 * Attributes for hairpin.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.ges.html
 */
export const AttrHairpinGesSchema = v.object({
  // TODO: Add hairpin.ges attributes
});

export type AttrHairpinGesData = v.InferOutput<typeof AttrHairpinGesSchema>;
