import * as v from "valibot";

/**
 * Attributes for section.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.anl.html
 */
export const AttrSectionAnlSchema = v.object({
  // TODO: Add section.anl attributes
});

export type AttrSectionAnlData = v.InferOutput<typeof AttrSectionAnlSchema>;
