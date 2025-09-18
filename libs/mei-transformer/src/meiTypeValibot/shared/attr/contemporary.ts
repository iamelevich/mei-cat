import * as v from "valibot";

/**
 * Attributes for contemporary elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.contemporary.html
 */
export const AttrContemporarySchema = v.object({
  // TODO: Add contemporary attributes
});

export type AttrContemporaryData = v.InferOutput<typeof AttrContemporarySchema>;
