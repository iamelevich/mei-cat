import * as v from "valibot";

/**
 * Attributes for typography.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typography.html
 */
export const AttrTypographySchema = v.object({
  // TODO: Add typography attributes
});

export type AttrTypographyData = v.InferOutput<typeof AttrTypographySchema>;
