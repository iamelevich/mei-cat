import * as v from "valibot";

/**
 * Attributes for visual offset horizontal.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.ho.html
 */
export const AttrVisualOffsetHoSchema = v.object({
  // TODO: Add visual offset horizontal attributes
});

export type AttrVisualOffsetHoData = v.InferOutput<typeof AttrVisualOffsetHoSchema>;
