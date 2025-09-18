import * as v from "valibot";

/**
 * Attributes for accidentals.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accidental.html
 */
export const AttrAccidentalSchema = v.object({
  // TODO: Add accidental attributes
});

export type AttrAccidentalData = v.InferOutput<typeof AttrAccidentalSchema>;
