import * as v from "valibot";

/**
 * Attributes for visual offset2.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.html
 */
export const AttrVisualOffset2Schema = v.object({
  // TODO: Add visual offset2 attributes
});

export type AttrVisualOffset2Data = v.InferOutput<typeof AttrVisualOffset2Schema>;
