import * as v from "valibot";

/**
 * Attributes for dot.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.ges.html
 */
export const AttrDotGesSchema = v.object({
  // TODO: Add dot.ges attributes
});

export type AttrDotGesData = v.InferOutput<typeof AttrDotGesSchema>;
