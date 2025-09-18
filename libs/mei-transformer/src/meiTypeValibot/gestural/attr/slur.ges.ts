import * as v from "valibot";

/**
 * Attributes for slur.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.ges.html
 */
export const AttrSlurGesSchema = v.object({
  // TODO: Add slur.ges attributes
});

export type AttrSlurGesData = v.InferOutput<typeof AttrSlurGesSchema>;
