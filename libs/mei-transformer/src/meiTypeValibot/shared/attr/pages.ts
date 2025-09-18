import * as v from "valibot";

/**
 * Attributes for pages.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pages.html
 */
export const AttrPagesSchema = v.object({
  // TODO: Add pages attributes
});

export type AttrPagesData = v.InferOutput<typeof AttrPagesSchema>;
