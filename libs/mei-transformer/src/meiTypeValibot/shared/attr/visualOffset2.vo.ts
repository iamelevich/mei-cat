import * as v from "valibot";

/**
 * Attributes for visual offset2 vertical.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.vo.html
 */
export const AttrVisualOffset2VoSchema = v.object({
  // TODO: Add visual offset2 vertical attributes
});

export type AttrVisualOffset2VoData = v.InferOutput<typeof AttrVisualOffset2VoSchema>;
