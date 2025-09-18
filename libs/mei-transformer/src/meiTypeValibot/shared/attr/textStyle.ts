import * as v from "valibot";

/**
 * Attributes for text style.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.textStyle.html
 */
export const AttrTextStyleSchema = v.object({
  // TODO: Add text style attributes
});

export type AttrTextStyleData = v.InferOutput<typeof AttrTextStyleSchema>;
