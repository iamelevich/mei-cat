import * as v from "valibot";

/**
 * Attributes for syllable.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.ges.html
 */
export const AttrSyllableGesSchema = v.object({
  // TODO: Add syllable.ges attributes
});

export type AttrSyllableGesData = v.InferOutput<typeof AttrSyllableGesSchema>;
