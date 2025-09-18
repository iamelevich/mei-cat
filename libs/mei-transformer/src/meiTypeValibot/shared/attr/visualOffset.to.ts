import * as v from "valibot";

/**
 * Attributes for visual offset to.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.to.html
 */
export const AttrVisualOffsetToSchema = v.object({
  // TODO: Add visual offset to attributes
});

export type AttrVisualOffsetToData = v.InferOutput<typeof AttrVisualOffsetToSchema>;
