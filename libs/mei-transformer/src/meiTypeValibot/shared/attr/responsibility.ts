import * as v from "valibot";

/**
 * Attributes for responsibility.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
 */
export const AttrResponsibilitySchema = v.object({
  // TODO: Add responsibility attributes
});

export type AttrResponsibilityData = v.InferOutput<typeof AttrResponsibilitySchema>;
