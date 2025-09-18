import * as v from "valibot";

/**
 * Attributes for repeatMark.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.repeatMark.ges.html
 */
export const AttrRepeatMarkGesSchema = v.object({
  // TODO: Add repeatMark.ges attributes
});

export type AttrRepeatMarkGesData = v.InferOutput<typeof AttrRepeatMarkGesSchema>;
