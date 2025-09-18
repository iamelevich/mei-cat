import * as v from "valibot";

/**
 * Attributes for notation style.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.notationStyle.html
 */
export const AttrNotationStyleSchema = v.object({
  // TODO: Add notation style attributes
});

export type AttrNotationStyleData = v.InferOutput<typeof AttrNotationStyleSchema>;
