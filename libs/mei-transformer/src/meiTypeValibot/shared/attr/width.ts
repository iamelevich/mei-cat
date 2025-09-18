import * as v from "valibot";

/**
 * Attributes for width.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.width.html
 */
export const AttrWidthSchema = v.object({
  // TODO: Add width attributes
});

export type AttrWidthData = v.InferOutput<typeof AttrWidthSchema>;
