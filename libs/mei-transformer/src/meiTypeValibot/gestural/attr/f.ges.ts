import * as v from "valibot";

/**
 * Attributes for f.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.f.ges.html
 */
export const AttrFGesSchema = v.object({
  // TODO: Add f.ges attributes
});

export type AttrFGesData = v.InferOutput<typeof AttrFGesSchema>;
