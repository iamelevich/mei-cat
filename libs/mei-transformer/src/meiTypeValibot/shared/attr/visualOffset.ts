import * as v from "valibot";

/**
 * Attributes for visual offset.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.html
 */
export const AttrVisualOffsetSchema = v.object({
  // TODO: Add visual offset attributes
});

export type AttrVisualOffsetData = v.InferOutput<typeof AttrVisualOffsetSchema>;
