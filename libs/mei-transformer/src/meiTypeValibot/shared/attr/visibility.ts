import * as v from "valibot";

/**
 * Attributes for visibility.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visibility.html
 */
export const AttrVisibilitySchema = v.object({
  // TODO: Add visibility attributes
});

export type AttrVisibilityData = v.InferOutput<typeof AttrVisibilitySchema>;
