import * as v from "valibot";

/**
 * Attributes for gliss.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.gliss.ges.html
 */
export const AttrGlissGesSchema = v.object({
  // TODO: Add gliss.ges attributes
});

export type AttrGlissGesData = v.InferOutput<typeof AttrGlissGesSchema>;
