import * as v from "valibot";

/**
 * Attributes for phrase.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.vis.html
 */
export const AttrPhraseVisSchema = v.object({
  // TODO: Add phrase.vis attributes
});

export type AttrPhraseVisData = v.InferOutput<typeof AttrPhraseVisSchema>;
