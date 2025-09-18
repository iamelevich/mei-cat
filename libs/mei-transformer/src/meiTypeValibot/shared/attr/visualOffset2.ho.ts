import * as v from "valibot";

/**
 * Attributes for visual offset2 horizontal.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.ho.html
 */
export const AttrVisualOffset2HoSchema = v.object({
  // TODO: Add visual offset2 horizontal attributes
});

export type AttrVisualOffset2HoData = v.InferOutput<typeof AttrVisualOffset2HoSchema>;
