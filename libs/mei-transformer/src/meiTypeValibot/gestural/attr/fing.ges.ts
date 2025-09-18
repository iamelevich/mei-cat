import * as v from "valibot";

/**
 * Attributes for fing.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fing.ges.html
 */
export const AttrFingGesSchema = v.object({
  // TODO: Add fing.ges attributes
});

export type AttrFingGesData = v.InferOutput<typeof AttrFingGesSchema>;
