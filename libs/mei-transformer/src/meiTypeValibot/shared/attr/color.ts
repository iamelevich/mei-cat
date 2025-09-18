import * as v from "valibot";

/**
 * Attributes for color.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.color.html
 */
export const AttrColorSchema = v.object({
  // TODO: Add color attributes
});

export type AttrColorData = v.InferOutput<typeof AttrColorSchema>;
