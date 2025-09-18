import * as v from "valibot";

/**
 * Attributes for clef.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.ges.html
 */
export const AttrClefGesSchema = v.object({
  // TODO: Add clef.ges attributes
});

export type AttrClefGesData = v.InferOutput<typeof AttrClefGesSchema>;
