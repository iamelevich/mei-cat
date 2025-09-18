import * as v from "valibot";

/**
 * Attributes for phrase.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.ges.html
 */
export const AttrPhraseGesSchema = v.object({
  // TODO: Add phrase.ges attributes
});

export type AttrPhraseGesData = v.InferOutput<typeof AttrPhraseGesSchema>;
