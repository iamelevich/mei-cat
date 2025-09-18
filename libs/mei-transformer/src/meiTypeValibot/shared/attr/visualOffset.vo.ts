import * as v from "valibot";

/**
 * Attributes for visual offset vertical.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.vo.html
 */
export const AttrVisualOffsetVoSchema = v.object({
  // TODO: Add visual offset vertical attributes
});

export type AttrVisualOffsetVoData = v.InferOutput<typeof AttrVisualOffsetVoSchema>;
