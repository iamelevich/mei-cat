import * as v from "valibot";

/**
 * Attributes for tie.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tie.ges.html
 */
export const AttrTieGesSchema = v.object({
  // TODO: Add tie.ges attributes
});

export type AttrTieGesData = v.InferOutput<typeof AttrTieGesSchema>;
