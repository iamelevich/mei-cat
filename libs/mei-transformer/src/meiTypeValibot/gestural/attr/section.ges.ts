import * as v from "valibot";

/**
 * Attributes for section.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.ges.html
 */
export const AttrSectionGesSchema = v.object({
  // TODO: Add section.ges attributes
});

export type AttrSectionGesData = v.InferOutput<typeof AttrSectionGesSchema>;
