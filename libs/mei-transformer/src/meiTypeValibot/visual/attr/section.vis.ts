import * as v from "valibot";

/**
 * Attributes for section.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.vis.html
 */
export const AttrSectionVisSchema = v.object({
  // TODO: Add section.vis attributes
});

export type AttrSectionVisData = v.InferOutput<typeof AttrSectionVisSchema>;
