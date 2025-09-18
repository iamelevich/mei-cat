import * as v from "valibot";

/**
 * Attributes for accidental.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accidental.ges.html
 */
export const AttrAccidentalGesSchema = v.object({
  // TODO: Add accidental.ges attributes
});

export type AttrAccidentalGesData = v.InferOutput<typeof AttrAccidentalGesSchema>;
