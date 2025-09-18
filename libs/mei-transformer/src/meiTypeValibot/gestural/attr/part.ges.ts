import * as v from "valibot";

/**
 * Attributes for part.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.part.ges.html
 */
export const AttrPartGesSchema = v.object({
  // TODO: Add part.ges attributes
});

export type AttrPartGesData = v.InferOutput<typeof AttrPartGesSchema>;
