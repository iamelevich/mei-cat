import * as v from "valibot";

/**
 * Attributes for visual offset2 to.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.to.html
 */
export const AttrVisualOffset2ToSchema = v.object({
  // TODO: Add visual offset2 to attributes
});

export type AttrVisualOffset2ToData = v.InferOutput<typeof AttrVisualOffset2ToSchema>;
