import * as v from "valibot";

/**
 * Attributes for whitespace.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.whitespace.html
 */
export const AttrWhitespaceSchema = v.object({
  // TODO: Add whitespace attributes
});

export type AttrWhitespaceData = v.InferOutput<typeof AttrWhitespaceSchema>;
