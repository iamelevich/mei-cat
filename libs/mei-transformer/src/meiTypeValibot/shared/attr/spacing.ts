import * as v from "valibot";

/**
 * Attributes for spacing.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.spacing.html
 */
export const AttrSpacingSchema = v.object({
  // TODO: Add spacing attributes
});

export type AttrSpacingData = v.InferOutput<typeof AttrSpacingSchema>;
