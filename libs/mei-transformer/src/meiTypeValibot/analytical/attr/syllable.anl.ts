import * as v from "valibot";

/**
 * Attributes for syllable.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.anl.html
 */
export const AttrSyllableAnlSchema = v.object({
  // TODO: Add syllable.anl attributes
});

export type AttrSyllableAnlData = v.InferOutput<typeof AttrSyllableAnlSchema>;
