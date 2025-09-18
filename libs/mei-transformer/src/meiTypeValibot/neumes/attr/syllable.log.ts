import * as v from "valibot";

/**
 * Attributes for syllable.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syllable.log.html
 */
export const AttrSyllableLogSchema = v.object({
  // TODO: Add syllable.log attributes
});

export type AttrSyllableLogData = v.InferOutput<typeof AttrSyllableLogSchema>;
