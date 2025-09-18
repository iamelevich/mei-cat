import * as v from "valibot";

/**
 * Attributes for ending.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.ges.html
 */
export const AttrEndingGesSchema = v.object({
  // TODO: Add ending.ges attributes
});

export type AttrEndingGesData = v.InferOutput<typeof AttrEndingGesSchema>;
