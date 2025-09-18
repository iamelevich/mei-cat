import * as v from "valibot";

/**
 * Attributes for phrase.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.anl.html
 */
export const AttrPhraseAnlSchema = v.object({
  // TODO: Add phrase.anl attributes
});

export type AttrPhraseAnlData = v.InferOutput<typeof AttrPhraseAnlSchema>;
